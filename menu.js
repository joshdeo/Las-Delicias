/* Menu data, transcribed from the printed menu. Prices are in CAD.
   Photos: each dish looks for images/<slug>.jpg. If the file is missing, a plate tile is shown instead,
   so adding a photo is just dropping a file with the right name into the images folder. */
const MENU = [
 {id:'desayunos', en:'Breakfast', es:'Desayunos', t:['#FFE08A','#F4A62A'], items:[
  {n:'Calentado', slug:'calentado', p:20.00, e:'🍳',
   en:'Beans, rice, beef, pieces of pork belly, corn dough and cheese.',
   es:'Frijoles, arroz, carne, trocitos de chicharrón, chorizo y queso.'},
  {n:'Arepa con Queso', slug:'arepa-con-queso', p:7.00, e:'🫓',
   en:'Corn dough and cheese.', es:'Masa de maíz y queso.'},
  {n:'Arepa con Queso & Huevos Revueltos', slug:'arepa-con-queso-huevos-revueltos', p:12.50, e:'🍳',
   en:'Corn dough, cheese and scrambled eggs.', es:'Masa de maíz, queso y huevos revueltos.'},
  {n:'Arepa de Chocolo con Queso', slug:'arepa-de-chocolo-con-queso', p:8.25, e:'🌽',
   en:'Sweet corn dough and cheese.', es:'Masa de maíz dulce y queso.'},
  {n:'Huevos con Cebolla & Tomate', slug:'huevos-con-cebolla-tomate', p:13.50, e:'🍅',
   en:'Scrambled eggs with onion, tomato, and corn cake with cheese.',
   es:'Huevos revueltos con cebolla, tomate y arepa con queso.'}
 ]},
 {id:'rapidas', en:'Quick Meals', es:'Comidas Rápidas', t:['#FFC7B8','#E5523F'], items:[
  {n:'Salchipapas', slug:'salchipapas', p:10.50, e:'🍟',
   en:'Sausages with french fries, sauce and quail boiled egg.',
   es:'Salchichas, papas fritas, salsa rosada y huevos de codorniz.'},
  {n:'Arepa Rellena: Pollo', slug:'arepa-rellena-pollo', p:13.00, e:'🫓',
   en:'Corn dough filled with chicken.', es:'Masa de maíz rellena de pollo.'},
  {n:'Arepa Rellena: Chicharrón', slug:'arepa-rellena-chicharron', p:13.00, e:'🫓',
   en:'Corn dough filled with pork belly.', es:'Masa de maíz rellena de chicharrón.'},
  {n:'Arepa Rellena: Mixta', slug:'arepa-rellena-mixta', p:13.50, e:'🫓',
   en:'Corn dough filled with chicken & pork belly.', es:'Masa de maíz rellena de pollo y chicharrón.'},
  {n:'Empanadas de Carne', slug:'empanadas-de-carne', p:2.00, e:'🥟',
   en:'Fried corn crust stuffed with beef or chicken.', es:'Masa de maíz frita rellena de carne o pollo.'}
 ]},
 {id:'picar', en:'Snacks', es:'Para Picar', t:['#D9F0C2','#4FA36B'], items:[
  {n:'Chorizo con Arepa', slug:'chorizo-con-arepa', p:8.50, e:'🌭',
   en:'Colombian sausage with corn dough.', es:'Chorizo colombiano con arepa.'},
  {n:'Papas Rellenas', slug:'papas-rellenas', p:3.25, e:'🥔',
   en:'Stuffed with ground beef, pieces of potatoes and onions.',
   es:'Rellenas de carne molida, trocitos de papa y cebolla.'},
  {n:'Buñuelos', slug:'bunuelos', p:2.00, e:'🧆',
   en:'Light fried pastries made with special flour and ground cheese.',
   es:'Masitas fritas y livianas hechas con harina especial y queso molido.'},
  {n:'Chicharrón con Arepa', slug:'chicharron-con-arepa', p:9.50, e:'🥓',
   en:'Crispy pork belly served with corn dough.', es:'Chicharrón crocante servido con arepa.'}
 ]},
 {id:'menu', en:'Main Dishes', es:'Platos Fuertes', t:['#C9D6FF','#3B5BC4'], items:[
  {n:'Bandeja Paisa', slug:'bandeja-paisa', p:26.00, e:'🍽️',
   en:'Rice, beans, steak, pork belly, egg, sweet plantain, Colombian sausage, and corn dough.',
   es:'Arroz, frijoles, carne frita, chicharrón, huevo frito, plátano maduro, chorizo y arepa.'},
  {n:'Sancocho', slug:'sancocho', p:22.00, e:'🍲',
   en:'Colombian stew made with potatoes, cassava, and plantain, served with rice and banana.',
   es:'Servido con arroz y banano.'},
  {n:'Lengua', slug:'lengua', p:26.00, e:'🥩',
   en:"Steamed cow's tongue served with rice, potatoes, cassava, avocado, and salad.",
   es:'Lengua de res con arroz, papa, yuca, aguacate y ensalada.'},
  {n:'Carne Asada', slug:'carne-asada', p:24.00, e:'🥩',
   en:'Steak.', es:'Carne asada.',
   o:{en:['Option 1: With rice, beans, and fried plantain.','Option 2: With french fries and salad.'],
      es:['Opción 1: Con arroz, frijoles y tajadas.','Opción 2: Con papas fritas y ensalada.']}},
  {n:'Mondongo', slug:'mondongo', p:22.00, e:'🍜',
   en:'Beef tripe soup with potatoes, cassava, onions, and pork; served with rice, avocado, banana, and corn dough.',
   es:'Sopa de mondongo acompañada de arroz, yuca, aguacate, banano y arepa.'},
  {n:'Sobre Barriga', slug:'sobre-barriga', p:26.00, e:'🥘',
   en:'Steamed flank steak in creole sauce with rice, potatoes, cassava, avocado, and salad.',
   es:'Acompañado de arroz, papas, aguacate y ensalada.'},
  {n:'Filete de Tilapia', slug:'filete-de-tilapia', p:23.00, e:'🐟',
   en:'Tilapia fillet with salad and fried green plantain.', es:'Servido con ensalada y plátano.'},
  {n:'Bistec a Caballo', slug:'bistec-a-caballo', p:24.00, e:'🍳',
   en:'Steak with a tomato and onion sauce, topped with 2 fried eggs, with corncake and cheese.',
   es:'Filete de carne asada con 2 huevos, cebolla, torta de maíz y queso.'},
  {n:'Carne Asada con Arepa & Queso', slug:'carne-asada-con-arepa-queso', p:22.00, e:'🥩',
   en:'Grilled flap steak with corn cake and cheese.', es:'Carne asada con arepa y queso.'},
  {n:'Pollo a la Plancha', slug:'pollo-a-la-plancha', p:23.00, e:'🍗',
   en:'Grilled chicken.', es:'Pollo a la plancha.',
   o:{en:['Option 1: Rice, salad, beans and plantain.','Option 2: Fries, and salad.'],
      es:['Opción 1: Arroz, ensalada, frijoles y plátano.','Opción 2: Papas fritas y ensalada.']}},
  {n:'Chuleta de Cerdo Empanizada', slug:'chuleta-de-cerdo-empanizada', p:23.00, e:'🥩',
   en:'Breaded pork loin.', es:'Lomo de cerdo empanizado.',
   o:{en:['Option 1: With rice, beans, and fried plantain.','Option 2: With french fries and salad.'],
      es:['Opción 1: Con arroz, frijoles y tajadas.','Opción 2: Con papas fritas y ensalada.']}},
  {n:'Lomo de Cerdo', slug:'lomo-de-cerdo', p:22.00, e:'🥩',
   en:'Grilled pork loin served with rice, fried plantains and salad.',
   es:'Asado servido con arroz, tostones y ensalada.'},
  {n:'Churrasco', slug:'churrasco', p:32.00, e:'🥩',
   en:'12oz AAA sirloin steak.', es:'Lomo de res AAA de 12 oz.',
   o:{en:['Option 1: Rice, beans, sweet plantain.','Option 2: Salad and french fries.'],
      es:['Opción 1: Arroz, frijoles, plátano maduro.','Opción 2: Ensalada y papas fritas.']}}
 ]},
 {id:'bebidas', en:'Drinks', es:'Bebidas', drinks:true, items:[
  {n:{en:'International Sodas',es:'Sodas Internacionales'}, p:3.25},
  {n:{en:'Fresh Juices',es:'Jugos Naturales'}, p:4.85},
  {n:{en:'Canned Soda',es:'Soda en Lata'}, p:2.95},
  {n:{en:'Chocolate',es:'Chocolate'}, p:3.00},
  {n:{en:'Coffee',es:'Café'}, p:2.95}
 ]}
];

const money = v => '$' + v.toFixed(2);

/* When a dish photo is missing, swap in a plate tile. */
function fb(img){
  const d = document.createElement('div');
  d.className = 'tile';
  d.style.cssText = '--t1:' + img.dataset.t1 + ';--t2:' + img.dataset.t2;
  d.innerHTML = '<span>' + img.dataset.e + '</span>';
  img.replaceWith(d);
}

function cardHTML(it, s, i, lang){
  const media = '<img src="images/' + it.slug + '.jpg" alt="' + it.n + '" loading="lazy" data-e="' + it.e +
    '" data-t1="' + s.t[0] + '" data-t2="' + s.t[1] + '" onerror="fb(this)">';
  const opts = it.o ? '<div class="opts">' + it.o[lang].map(x => '<span>' + x + '</span>').join('') + '</div>' : '';
  return '<article class="card" style="animation-delay:' + (i*40) + 'ms"><div class="media">' + media +
    '<span class="price">' + money(it.p) + '</span></div><div class="body"><h3>' + it.n + '</h3><p>' + it[lang] +
    '</p>' + opts + '</div></article>';
}

function findDish(name){
  for (const s of MENU) for (const it of s.items) if (it.n === name) return {it, s};
  return null;
}
