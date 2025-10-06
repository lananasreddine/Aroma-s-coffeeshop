// menu.js
export const MENU = {
 hot: [
  { id:'h1', ar:'شاي', en:'Tea', img:'photos/shay.jpg', price:'$0.70' },
  { id:'h2', ar:'قهوة', en:'Coffee', img:'photos/ahwe.jpg', price:'$0.70' },
  { id:'h3', ar:'زهورات', en:'Herbal Mix', img:'photos/زهورات.jpg', price:'$1.00' },
  { id:'h4', ar:'زعتر', en:'Thyme Tea', img:'photos/Thyme Tea.webp', price:'$1.00' },
  { id:'h5', ar:'مليسة', en:'Melissa', img:'photos/مليسة.jpg', price:'$1.00' },
  { id:'h6', ar:'يانسون', en:'Anise', img:'photos/يانسون.webp', price:'$1.00' },
  { id:'h7', ar:'كمون وليمون', en:'Cumin & Lemon', img:'photos/كمون وليمون.jpg', price:'$1.00' },
  { id:'h8', ar:'نسكافية', en:'Nescafé', img:'photos/نسكافية.webp', price:'$1.50' },
  { id:'h9', ar:'كاكاو', en:'Cocoa', img:'photos/کاکاو.webp', price:'$1.50' },
  { id:'h10', ar:'كابتشينو', en:'Cappuccino', img:'photos/كابتشينو.jpg', price:'$1.50' },
  { id:'h11', ar:'نسكافيه 3in1', en:'Nescafé 3in1', img:'photos/in1نسكافيه 3.webp', price:'$1.00' },
  { id:'h13', ar:'كابتشينو تيروبيكا', en:'Cappuccino Tirobica', img:'photos/torabika.png', price:'$1.00' },
  { id:'h14', ar:'شاي اخضر', en:'Green Tea', img:'photos/Green Tea.jpg', price:'$0.70' },
  { id:'h15', ar:'زنجبيل وعسل', en:'Ginger & Honey', img:'photos/زنجبيل وعسل.jpg', price:'$1.50' },
  { id:'h16', ar:'زنجبيل وحامض وعسل', en:'Ginger Lemon Honey', img:'photos/hamd aasal.jpg', price:'$1.50' },
  { id:'h17', ar:'لاتيه', en:'Latte', img:'photos/لاتیه.webp', price:'$2.00' },
  { id:'h18', ar:'امركان كافيه', en:'Americano', img:'photos/AmericanCoffee.jpg', price:'$1.00' },
    { id:'h12', ar:'نسكافية 2in1', en:'Nescafé 2in1', img:'photos/in1نسكافيه 3.webp', price:'$1.00' },
]
,

cold: [
  // Milkshakes
  { id: 'c1', name: 'Oreo / أوريو', price: '$4.50', description: 'Creamy Oreo shake with a swirl of whipped cream', category: 'Milkshake' },
  { id: 'c2', name: 'Lotus / لوتس', price: '$4.50', description: 'Sweet Lotus shake with a caramel touch', category: 'Milkshake' },
  { id: 'c3', name: 'Chocolate / شوكولاتة', price: '$4.50', description: 'Rich chocolate shake topped with chocolate chips', category: 'Milkshake' },
  { id: 'c4', name: 'Vanilla / فانيلا', price: '$4.00', description: 'Classic vanilla shake with a creamy finish', category: 'Milkshake' },
  { id: 'c5', name: 'Strawberry / فراولة', price: '$4.50', description: 'Fresh strawberry shake crowned with whipped cream', category: 'Milkshake' },
  { id: 'c6', name: 'Pistachio / فستق', price: '$5.00', description: 'Nutty pistachio shake with a smooth texture', category: 'Milkshake' },

  // // Detox
  // { id: 'd1', name: 'Charcoal Lemonade / ليمونادة فحمية', price: '$4.50', description: 'Zesty lemonade with a charcoal twist', category: 'Detox' },
  // { id: 'd2', name: 'Pitaya Beauty Water / ماء بيتايا', price: '$5.00', description: 'Vibrant pitaya drink, refreshing and light', category: 'Detox' },
  // { id: 'd3', name: 'Golden Glow / توهج ذهبي', price: '$5.00', description: 'Warm turmeric and spice drink for a golden boost', category: 'Detox' },

  // Smoothies
  { id: 's1', name: 'Mango / مانجو', price: '$4.00', description: 'Tropical mango smoothie with a refreshing zing', category: 'Smoothie' },
  { id: 's2', name: 'Strawberry / فراولة', price: '$4.00', description: 'Bright strawberry smoothie with fruity sweetness', category: 'Smoothie' },
  { id: 's3', name: 'Mixed Berries / توت مشكل', price: '$4.50', description: 'A tangy mix of berries in a smooth blend', category: 'Smoothie' },
  { id: 's4', name: 'Tropical Fruits / فواكه استوائية', price: '$4.50', description: 'Exotic tropical fruit medley in a refreshing smoothie', category: 'Smoothie' },

  // Coolers
  { id: 'cl1', name: 'Ice Tea Peach / شاي مثلج خوخ', price: '$3.50', description: 'Chilled peach tea with a crisp finish', category: 'Cooler' },
  { id: 'cl2', name: 'Passion Fruit / فاكهة العاطفة', price: '$3.50', description: 'Fruity passion cooler with tropical flair', category: 'Cooler' },
  { id: 'cl3', name: 'Mojito / موهيتو', price: '$4.00', description: 'Classic mint and lime sparkling refreshment', category: 'Cooler' },
  { id: 'cl4', name: 'Flavored Mojito / موهيتو منكه', price: '$4.50', description: 'Mojito with a fruity twist and sparkling water', category: 'Cooler' },

  // Iced Coffee & Latte
  { id: 'ic1', name: 'Iced Americano / أيس أمريكانو', price: '$3.50', description: 'Chilled espresso over ice', category: 'Iced Coffee' },
  { id: 'ic2', name: 'Iced Latte / أيس لاتيه', price: '$4.00', description: 'Smooth espresso with cold milk and ice', category: 'Iced Coffee' },
  { id: 'ic3', name: 'Flavored Iced Latte / أيس لاتيه منكه', price: '$4.50', description: 'Iced latte with a hint of your favorite flavor', category: 'Iced Coffee' },
  { id: 'ic4', name: 'Iced Mocha / أيس موكا', price: '$4.50', description: 'Chocolatey iced coffee with creamy milk', category: 'Iced Coffee' },
  { id: 'ic5', name: 'Iced Matcha / أيس ماتشا', price: '$5.00', description: 'Refreshing cold matcha latte', category: 'Iced Coffee' },
  { id: 'ic6', name: 'Iced Tiramisu / أيس تيراميسو', price: '$5.00', description: 'Iced coffee with a creamy tiramisu topping', category: 'Iced Coffee' },
]

,

 saj: [
  { id:'s1', ar:'صاج جبنة', en:'Cheese Saj', img:'photos/صاج جبنة.jpg', price:'$2.00' },
  { id:'s2', ar:'صاج زعتر', en:'Za’atar Saj', img:'photos/صاج zaatar.jpg', price:'$1.00' },
  { id:'s3', ar:'صاج حبش وجبنة', en:'Turkey & Cheese Saj', img:'photos/habash.webp', price:'$2.50' },
  { id:'s4', ar:'صاج قشقوان', en:'Kashkaval Saj', img:'photos/صاج قشقوان.jpg', price:'$3.00' },
  { id:'s5', ar:'صاج مرتديلا', en:'Mortadella Saj', img:'photos/صاج مرتديلا.jpg', price:'$2.50' },
  { id:'s6', ar:'صاج لبنة', en:'Labneh Saj', img:'photos/صاج لبنة.webp', price:'$1.00' },
  { id:'s7', ar:'صاج قشقوان وحبش', en:'Kashkaval & Turkey Saj', img:'photos/habash.webp', price:'$3.00' },
  { id:'s8', ar:'صاج قشقوان ومرتديلا', en:'Kashkaval & Mortadella Saj', img:'photos/habashh.webp', price:'$3.00' },
  { id:'s9', ar:'صاج نيوتيلا', en:'Nutella Saj', img:'photos/CHOCO-SAJ.webp', price:'$2.50' },
  { id:'s9', ar:'صاج بيكون', en:'Picon Saj', img:'photos/صاج جبنة.jpg', price:'$1.50' },
]
,

cocktail: [
  { id: 'k0', ar: 'عصير ليمون', en: 'Lemon Juice', price: '$3.00' },
  { id: 'k3', ar: 'عصير جزر', en: 'Carrot Juice', price: '$3.00' },
  { id: 'k4', ar: 'عصير تفاح', en: 'Apple Juice', price: '$3.00' },
  { id: 'k5', ar: 'ليموناضة', en: 'Lemonade', price: '$3.00' },
  { id: 'k6', ar: 'ليموناضة ونعنع', en: 'Lemonade Mint', price: '$4.00' },
  { id: 'k7', ar: 'حليب وموز', en: 'Milk & Banana Shake', price: '$4.00' },
  { id: 'k8', ar: 'كوكتيل فواكه', en: 'Fruit Cocktail', price: '$4.00' },
  { id: 'k9', ar: 'عصير فريز', en: 'Strawberry Juice', price: '$4.00' },
  { id: 'k10', ar: 'عصير منغا', en: 'Mango Juice', price: '$5.00' },
  { id: 'k11', ar: 'عصير اناناس', en: 'Pineapple Juice', price: '$5.00' },
  { id: 'k12', ar: 'فريز وحليب', en: 'Strawberry Milkshake', price: '$4.00' },
  { id: 'k13', ar: 'عصير افوكا', en: 'Avocado Juice', price: '$5.00' },
  { id: 'k14', ar: 'كوكتيل اروما', en: 'Aroma Cocktail', price: '$7.00' },
],

  shisha: [
    { id: 'sh1', ar: 'ارغيلة تفاحتين', en: 'Double Apple Shisha', img: 'photos/hookah (1).png', price: '400 000L.L' },
    { id: 'sh2', ar: 'ارغيلة عنب', en: 'Grape Shisha', img: 'photos/hookah (2).png', price: '400 000L.L' },
    { id: 'sh3', ar: 'ارغيلة عنب ونعنع', en: 'Grape Mint Shisha', img: 'photos/hookah (3).png', price: '400 000L.L' },
    { id: 'sh4', ar: 'ارغيلة حامض ونعنع', en: 'Lemon Mint Shisha', img: 'photos/hookah (4).png', price: '400 000L.L' },
    { id: 'sh5', ar: 'ارغيلة Love', en: 'Love Shisha', img: 'photos/shisha.png', price: '400 000L.L' },
    { id: 'sh6', ar: 'ارغيلة عجمي', en: 'Ajami Shisha', img: 'photos/hookah (6).png', price: '500 000L.L' },
    { id: 'sh7', ar: 'خدمة ارغيلة عجمي', en: 'Ajami Shisha Service', img: 'photos/hookah (7).png', price: '250 000L.L' },
    { id: 'sh7', ar: '  راس جديد'  , en: 'Ajami Shisha Service', img: 'photos/hookah (7).png', price: '250 000L.L' },
  ],
 snacks :[
  // 🧊 براد
  { ar: 'ببسي', en: 'Pepsi', img: 'photos/pepsi.avif', price: '$1.20' },
  { ar: 'سفن اب', en: '7UP', img: 'photos/7up-.webp', price: '$1.20' },
  { ar: 'ميرندا', en: 'Mirinda', img: 'photos/miranda.avif', price: '$1.20' },
  { ar: 'لبن', en: 'Laban', img: 'photos/laban.webp', price: '$1.20' },
  { ar: 'بوم بوم', en: 'Boom Boom', img: 'photos/boomboom.jpg', price: '$1.50' },
  { ar: 'رد بول', en: 'Red Bull', img: 'photos/redbull.avif', price: '$2.20' },
  { ar: 'دارك بلو', en: 'Dark Blue', img: 'photos/db.png', price: '$1.20' },
  { ar: 'ايس تي', en: 'Ice Tea', img: 'photos/ice tea.avif', price: '$1.50' },
  { ar: 'ايس كوفي', en: 'Ice Coffee', img: 'photos/ice coffe.jpg', price: '$1.50' },
  { ar: 'فرييز', en: 'Freeze', img: 'photos/freeze.jpg', price: '$1.50' },
  { ar: 'ميلك شيك', en: 'Milkshake', img: 'photos/milkshake.jpg', price: '$1.00' },
  { ar: 'ريندو', en: 'Rindo', img: 'photos/rindo.avif', price: '$1.00' },
  { ar: 'الوفيرا', en: 'Aloe Vera', img: 'photos/aloevera.avif', price: '$2.00' },
  { ar: 'ريم غازية', en: 'Rim Sparkling', img: 'photos/rim sp.avif', price: '$1.00' },
  { ar: 'مياه ص', en: 'Water Small', img: 'photos/water small.webp', price: '$0.35' },
  { ar: 'مياه ك', en: 'Water Large', img: 'photos/water big.jpg', price: '$1.00' },
  { ar: 'ريم Fruits', en: 'Rim Fruits', img: 'photos/Rim-Web-RXF-A.jpg', price: '$1.80' },

  // 🍫 شوكولا
  { ar: 'مارس', en: 'Mars', img: 'photos/mars_twix_white_58g_prod-500x500.jpg', price: '$1.00' },
  { ar: 'سنكرز', en: 'Snickers', img: 'photos/snickers.webp', price: '$1.00' },
  { ar: 'البيني', en: 'Albeni', img: 'photos/albeni.avif', price: '$1.00' },
  { ar: 'البيني كيك', en: 'Albeni Cake', img: 'photos/cake albeni.avif', price: '$1.00' },
  { ar: 'باونتي', en: 'Bounty', img: 'photos/bounty.jpg', price: '$1.20' },
  { ar: 'تويكس', en: 'Twix', img: 'photos/twix.jpg', price: '$1.20' },
  { ar: 'كيندر', en: 'Kinder', img: 'photos/kinder-chocolate-8-pack.jpg', price: '$1.50' },
  { ar: 'كيت كات', en: 'KitKat', img: 'photos/kitkat.avif', price: '$1.00' },
  { ar: 'كيندر دليس', en: 'Kinder Delice', img: 'photos/kinder delice.jpg', price: '$1.20' },
  { ar: 'نسلة', en: 'Nestlé', img: 'photos/nestle.avif', price: '$0.50' },
  { ar: 'نسكويك', en: 'Nesquik', img: 'photos/nesquik.webp', price: '$0.50' },
  { ar: 'ستارز', en: 'Stars', img: 'photos/stars.avif', price: '$0.50' },
  { ar: 'شوكوبرنس', en: 'Choco Prince', img: 'photos/choco prince.jpg', price: '$0.70' },
  { ar: 'اونيكا', en: 'Unica', img: 'photos/unica.jpg', price: '$0.50' },
  { ar: 'ريماس كيك', en: 'Rimas Cake', img: 'photos/rimas cake.jpg', price: '$0.50' },
  { ar: 'ريماس براوني', en: 'Rimas Brownie', img: 'photos/rimas brownie.jpg', price: '$0.60' },
  { ar: 'ريماس تمر', en: 'Rimas Date Bar', img: 'photos/rimas date.jpg', price: '$0.50' },
  { ar: 'ماستر ص', en: 'Master Small', img: 'photos/master.jpg', price: '$0.50' },
  { ar: 'ماستر ك', en: 'Master Large', img: 'photos/master.jpg', price: '$1.00' }
],



};
