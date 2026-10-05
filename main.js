/* Shared behaviour for every page: language, open status, hours, nav, reveal */
const HOURS = {open:[8,30], close:[19,0]};   // every day, as printed on the menu
const TZ = 'America/Toronto';
const $ = s => document.querySelector(s);

const T = {
 en:{
  nav_home:'Home',nav_menu:'Menu',nav_about:'Our Story',nav_visit:'Visit',
  h1a:'Homestyle',h1b:'Colombian',h1c:'cooking, served like family.',
  lead:'Real recipes from our kitchen to your table on Dundas Street West. Visit us or call to order and it will be ready for pickup.',
  cta_menu:'Explore the menu',cta_call:'Call to order',
  f_eye:'Crowd favourites',f_h:'Start with these.',f_cta:'See the full menu',
  t_eye:'Our story',t_h:'Recipes that taste like home.',t_cta:'Read our story',
  s_addr:'Find us',s_hours:'Open every day',s_call:'Call for pickup',s_more:'Full details',
  pm_eye:'The menu',pm_h:'Our infinite world of delicious.',pm_p:'Every dish with its price. Call us to place your order and it will be ready for pickup.',
  m_note:'No changes to the menu are accepted. Changes carry extra charges. Prices may change by season.',
  search:'Search dishes',all:'All',none:'No dishes match your search.',
  pa_eye:'About us',pa_h:'Our story',pa_p:'Fifteen years of family cooking on Dundas Street West.',
  a_h:'The best of Colombian recipes, straight to your table.',
  a_p1:'For the last 15 years we have been delighted to serve families and friends on Dundas Street West. The taste is colourful, the staff is friendly, and there is always a seat for you.',
  a_p2:'We refuse to compromise on quality. That is why we source the freshest and most delicious ingredients for every plate we make.',
  a_cta:'See the menu',
  va_h:'Our staff',va_p:'The best taste and friendly staff are waiting for you.',
  vb_h:'Pickup and enjoy',vb_p:'Pick up your order and enjoy the tasteful and colourful recipes with your family and friends.',
  vc_h:'Quality first',vc_p:'We source the freshest and most delicious ingredients for every plate.',
  pv_eye:'Visit us',pv_h:'We are open. Come hungry.',pv_p:'Visit us to be served, or call us to order.',
  v_addr:'Address',v_dir:'Get directions',v_call:'Call to order',v_ready:'Call us for pickup. Your order will be ready when you arrive.',
  v_hours:'Hours',v_social:'Follow us',
  map_pin:'Las Delicias Mississauga',map_g:'Open in Google Maps',map_a:'Open in Apple Maps',map_live:'Show interactive map',
  open:'Open now, closes at',closed:'Closed now, opens',
  days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  tomorrow:'tomorrow at',today:'today at',to:'to',everyday:'Every day',
  rights:'All rights reserved'},
 es:{
  nav_home:'Inicio',nav_menu:'Menú',nav_about:'Nuestra Historia',nav_visit:'Visítanos',
  h1a:'Cocina',h1b:'colombiana',h1c:'casera, servida como en familia.',
  lead:'Recetas de verdad, de nuestra cocina a tu mesa en Dundas Street West. Visítanos o llama para ordenar y estará listo para recoger.',
  cta_menu:'Ver el menú',cta_call:'Llama y ordena',
  f_eye:'Favoritos de la casa',f_h:'Empieza con estos.',f_cta:'Ver el menú completo',
  t_eye:'Nuestra historia',t_h:'Recetas que saben a casa.',t_cta:'Leer nuestra historia',
  s_addr:'Encuéntranos',s_hours:'Abierto todos los días',s_call:'Llama para recoger',s_more:'Más detalles',
  pm_eye:'El menú',pm_h:'Nuestro mundo infinito de sabor.',pm_p:'Cada plato con su precio. Llámanos para ordenar y estará listo para recoger.',
  m_note:'No se aceptan cambios en el menú. Cambios generan cargos extra. Hay cambios de precios por temporada.',
  search:'Buscar platos',all:'Todo',none:'Ningún plato coincide con tu búsqueda.',
  pa_eye:'Sobre nosotros',pa_h:'Nuestra historia',pa_p:'Quince años de cocina familiar en Dundas Street West.',
  a_h:'Lo mejor de las recetas colombianas, directo a tu mesa.',
  a_p1:'Durante los últimos 15 años hemos tenido el gusto de servir a familias y amigos en Dundas Street West. El sabor es colorido, el equipo es amable y siempre hay un lugar para ti.',
  a_p2:'No negociamos la calidad. Por eso conseguimos los ingredientes más frescos y deliciosos para cada plato.',
  a_cta:'Ver el menú',
  va_h:'Nuestro equipo',va_p:'El mejor sabor y un equipo amable te están esperando.',
  vb_h:'Recoge y disfruta',vb_p:'Recoge tu pedido y disfruta de recetas sabrosas y coloridas con tu familia y amigos.',
  vc_h:'La calidad primero',vc_p:'Conseguimos los ingredientes más frescos y deliciosos para cada plato.',
  pv_eye:'Visítanos',pv_h:'Estamos abiertos. Ven con hambre.',pv_p:'Visítanos para que te atendamos, o llámanos para ordenar.',
  v_addr:'Dirección',v_dir:'Cómo llegar',v_call:'Llama y ordena',v_ready:'Llámanos para recoger. Tu pedido estará listo cuando llegues.',
  v_hours:'Horario',v_social:'Síguenos',
  map_pin:'Las Delicias Mississauga',map_g:'Abrir en Google Maps',map_a:'Abrir en Apple Maps',map_live:'Mostrar mapa interactivo',
  open:'Abierto ahora, cerramos a las',closed:'Cerrado ahora, abrimos',
  days:['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  tomorrow:'mañana a las',today:'hoy a las',to:'a',everyday:'Todos los días',
  rights:'Todos los derechos reservados'}
};

let lang = 'en';
try { lang = localStorage.getItem('ld_lang') || 'en'; } catch(e) {}

const fmt = (h,m) => { const ap = h>=12?'PM':'AM'; const hh = h%12||12; return hh+':'+String(m).padStart(2,'0')+' '+ap; };
const hoursText = () => fmt(...HOURS.open)+' '+T[lang].to+' '+fmt(...HOURS.close);

function torontoNow(){
  const p = new Intl.DateTimeFormat('en-CA',{timeZone:TZ,hour:'numeric',minute:'numeric',hour12:false,weekday:'short'}).formatToParts(new Date());
  const g = t => p.find(x=>x.type===t).value;
  const wd = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday'));
  return {wd, mins:(+g('hour')%24)*60+(+g('minute'))};
}
function updateStatus(){
  const el = $('#status'); if(!el) return;
  const {mins} = torontoNow();
  const o = HOURS.open[0]*60+HOURS.open[1], c = HOURS.close[0]*60+HOURS.close[1];
  const isOpen = mins>=o && mins<c, t = T[lang];
  el.classList.toggle('closed', !isOpen);
  $('#statusText').textContent = isOpen ? t.open+' '+fmt(...HOURS.close)
    : t.closed+' '+(mins<o?t.today:t.tomorrow)+' '+fmt(...HOURS.open);
}
function renderHours(){
  const box = $('#hours'); if(!box) return;
  const {wd} = torontoNow();
  box.innerHTML = T[lang].days.map((d,i)=>`<div class="${i===wd?'today':''}"><span>${d}</span><span>${hoursText()}</span></div>`).join('');
  const hs = $('#hoursShort'); if(hs) hs.textContent = hoursText();
}
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(e=>{ const v=T[lang][e.dataset.i18n]; if(v) e.textContent=v; });
  document.querySelectorAll('[data-i18n-ph]').forEach(e=>{ e.placeholder = T[lang][e.dataset.i18nPh]; });
  const b = $('#lang'); if(b) b.textContent = lang==='en'?'ES':'EN';
  renderHours(); updateStatus();
  if(window.onLang) window.onLang();
}

document.addEventListener('DOMContentLoaded',()=>{
  const hdr = $('#top');
  const onScroll = () => hdr.classList.toggle('solid', scrollY>40);
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  const bg = $('#heroBg');
  $('#lang').addEventListener('click',()=>{
    lang = lang==='en'?'es':'en';
    try { localStorage.setItem('ld_lang', lang); } catch(e) {}
    applyLang();
  });
  $('#burger').addEventListener('click',()=>$('#links').classList.toggle('open'));
  document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));
  const io = new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting) return; en.target.classList.add('in'); io.unobserve(en.target);
  }),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const tr = $('#track');
  if(tr){
    const words=['Bandeja Paisa','Empanadas','Sancocho','Arepas','Salchipapas','Mondongo','Buñuelos','Churrasco'];
    tr.innerHTML=[...words,...words].map(w=>`<span>${w}</span>`).join('');
  }
  const mapBtn = $('#mapLive');
  if(mapBtn) mapBtn.addEventListener('click',()=>{
    const box = $('#mapbox');
    const f = document.createElement('iframe');
    f.title = 'Map'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
    f.src = 'https://www.google.com/maps?q=59+Dundas+Street+West+Mississauga+ON+L5B+1H7&output=embed';
    box.appendChild(f); box.classList.add('live');
  });
  applyLang();
  setInterval(updateStatus, 30000);
});
