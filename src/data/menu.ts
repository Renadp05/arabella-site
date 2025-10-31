export type MenuItem = {
  name: string;
  price?: number | string;
  description?: string;
  image?: string; // <— re
  tags?: string[];
};

export type MenuSection= {
  title: string;
  note?: string;
  items: MenuItem[];
  featuredImage?: string; // <— foto prezantuese e seksionit (opsionale)
};

/* =======================
   ARABELLA — ALL DAY MENU
   ======================= */
export const mainMenu: MenuSection[] = [
  // --- STARTERS ---
  {
    title: "Starters",
    featuredImage: "/menu/img_5935.jpeg", // Grilled Shrimp Plate
    items: [
      {
        name: "Burrata Salad (V) (GF)",
        price: 7,
        description:
          "Creamy burrata cheese with tomatoes & basil, drizzled with olive oil and pesto.",
      },
      {
        name: "Mixed Olives & Bread (V) (GF)",
        price: 4,
        description: "With olives oil & dip.",
      },
      {
        name: "Bruschetta (V)",
        price: 5,
        description:
          "Crispy Italian bread topped with tomatoes seasoned balsamic vinegar and olive oil.",
      },
      {
        name: "Halloumi Fries (V)",
        price: 6,
        description: "Served with a sweet chilli sauce.",
      },
      {
        name: "Grilled Prawns",
        price: 9,
        description:
          "Garlic & butter grilled prawns drizzled with fresh lemon.",
        image: "/menu/img_5935.jpeg",  
      },
    ],
  },

  // --- MAINS ---
  {
    title: "Mains",
    note:"All steaks come with your choice of steak sauce.",
    featuredImage: "/menu/img_5930.jpeg", // Grilled Lamb Chops with Rice & Salad
    items: [
      {
        name: "Grilled Steak",
        price: 15,
        description:
          "Served with chips or rice and salad and a choice of sauce .",
        image: "/menu/img_5932.jpeg",  
      },
      {
        name: "Lamb Chops",
        price: 16,
        description: "Served with rice and salad.",
        image: "/menu/img_5932.jpeg",
      },
      {
        name: "Marinated Grilled Chicken Thighs",
        price: 13,
        description: "Served with rice and salad.",
      },
      {
        name: "Sea Bream",
        price: 12,
        description:
          "Dressed in a lemon & herb dressing, served with baby potatoes and salad.",
         image: "/menu/img_5942.jpeg", 
      },
      {
        name: "Pan Fried Salmon",
        price: 13,
        description: "Served with mashed potatoes and mixed veg.",
        image: "/menu/img_5933.jpeg",
      },
      {
        name: "Creamy Chicken",
        price: 12,
        description: "In a creamy spinach sauce, served with potatoes.",
      },
      {
        name: "Arabella’s Spicy Wings",
        price: 9,
        description: "Tangy sweet & spicy chicken wings served with chips and purple slaw.",
      },
      {
        name: "Lamb Kebab",
        price: 10,
        description: "Marinated lamb kebab served with pita bread & salad.",
      },
    ],
  },

  // --- PASTAS ---
  {
    title: "Pastas",
    items: [
      {
        name: "Penne Arrabiata (V)",
        price: 8,
        description: "Homemade spicy tomato sauce.",
      },
      {
        name: "Spaghetti Carbonara",
        price: 10,
        description: "Smoked bacon, creamy Parmesan sauce.",
      },
      {
        name: "Spaghetti Bolognese",
        price: 11,
        description: "Seasoned beef mince in a delicious homemade tomato sauce.",
      },
      {
        name: "Penne Pollo Funghi",
        price: 13,
        description: "Homemade creamy chicken and mushroom sauce with aromatic herbs.",
      },
      {
        name: "Prawn Linguine",
        price: 14,
        description:
          "Prawns with cherry tomatoes and herbs in a delicious white wine sauce.",
      },
    ],
  },

  // --- BURGERS ---
  {
    title: "Burgers are served with Fries & Coleslaw",
    items: [
      {
        name: "Arabella Beef Burger",
        price: 10,
        description:
          "Beef patty, tomato, lettuce, fried onions, cheese, dripping in Arabella’s special sauce.",
      },
      {
        name: "Arabella Chicken Burger",
        price: 8,
        description:
          "Grilled chicken breast, mayo-bella sauce, lettuce, tomato and cheese.",
      },
      {
        name: "Veggie-Bella Burger (V)",
        price: 6,
        description:
          "Veggie patty, halloumi, lettuce, sweet pepper houmas.",
      },
      {
        name: "Spicy Chicken Burger",
        price: 8,
        description:
          "Breaded chicken, sweet chilli sauce, lettuce & cheese.",
      },
      {
        name: "Classic Beef Burger",
        price: 9,
        description: "Beef patty, tomato, lettuce, cheese & pickle.",
      },
      {
        name: "Caramelised Onion Beef Burger",
        price: 10,
        description:
          "Beef patty, caramelised onions, cheese, lettuce & tomato & pickle .",
          }
    ],
  },

  // --- SALADS ---
  {
    title: "Salads",
    items: [
      {
        name: "Classic Caesar Salad",
        price: 12,
        description:
          "Grilled chicken, parmesan, croutons & Caesar dressing.",
      },
      {
        name: "Mediterranean Salad (V)",
        price: 9,
        description:
          "Tomatoes, cucumber, red onion, peppers & feta cheese.",
      },
      {
        name: "Avocado Salad (V)",
        price: 10,
        description:
          "Green leaf salad with avocado, sweetcorn,tomatoes & cucumber drizzled in a zesty dressing.",
      image: "/menu/img_5941.jpeg",
        },
      { name: "Add Grilled Chicken", price: 5 },
      { name: "Add Halloumi", price: 3 },
      { name: "Add Avocado", price: 3 },
    ],
  },

  // --- TRADITIONAL DISHES ---
  {
    title: "Traditional Dishes",
    items: [
      { name: "Tagebab", price: 7, description: "A slow cooked beef stew." },
      { name: "Fasule", price: 7, description: "A bean stew with beef." },
      { name: "Lamb with Rice", price: 7, description: "Boiled lamb meat on a bed of rice." },
      {
        name: "Stuffed Peppers",
        price: 8,
        description: "Peppers stuffed with rice, minced beef and onions.",
      },
    ],
  },

  // --- WRAPS ---
  {
    title: "Wraps",
    items: [
      { name: "Chicken Caesar Wrap", price: 6, description: "Chicken, lettuce, avocado & cheese." },
      { name: "Peri-Peri Wrap", price: 6, description: "Chicken, lettuce, tomato,mayo." },
      { name: "Vegetarian Wrap (V)", price: 5, description: "Halloumi cheese, lettuce, avocado & tomato." },
    ],
  },

  // --- SAUCES ---
  {
    title: "Sauces",
    items: [
      { name: "Peppercorn Sauce", price: 2 },
      { name: "Chimichurri", price: 2 },
      { name: "Beef Dripping", price: 1 },
      { name: "Garlic Butter", price: 1 },
      { name: "Sweet Chilli Sauce", price: 1.5 },
      { name: "Peri-Peri Sauce", price: 1.5 },
      { name: "Chicken Caesar", price: 1.5 },
    ],
  },

  // --- SIDES ---
  {
    title: "Sides",
    items: [
      { name: "Creamy Mash", price: 3 },
      { name: "Fries", price: 3 },
      { name: "Grilled Vegetables", price: 4 },
      { name: "Long Stem Broccoli", price: 3 },
      { name: "Coleslaw", price: 4 },
      { name: "Rice", price: 4 },
      { name: "Homemade Pickles", price: 2 },
    ],
  },

  // --- DESSERTS ---
  {
    title: "Arabella Treats",
    items: [
      { name: "Baklava", price: 5, description: "Served with vanilla ice cream." },
      { name: "Fruit Platter", price: 6, description: "Mixed fruits to share." },
      { name: "Chocolate Cake", price: 4, description: "Served with vanilla ice cream." },
      { name: "Trilece", price: 4, description: "Milk cake with caramel topping." },
    
    ],
  },
];

/* =====================
   BREAKFAST MENU (AM)
   ===================== */
export const breakfastMenu: MenuSection[] = [
  {
    title: "Breakfasts",
    items: [
      {
        name: "Classic English Breakfast",
        price: 10,
        description:
          "Eggs, 2 slices of bacon, Cumberland sausage, mushroom, baked beans & toast.",
      image: "/menu/img_5943.jpeg",
        },
      {
        name: "Full English Breakfast",
        price: 13,
        description:
          "2 eggs, 2 slices of bacon, 2 Cumberland sausages, mushroom, grilled tomatoes, baked beans & toast.",
      
        },
      {
        name: "Light Breakfast",
        price: 10,
        description:
          "Smoked salmon, 2 eggs, grilled tomatoes, avocado, mushroom, grilled halloumi & toast.",
      },
      {
        name: "Veggie Breakfast",
        price: 11,
        description:
          "2 Eggs, vegetarian sausage,hash brown, mushroom, halloumi,grilled halloumi, grilled tomato, baked beans & toast.",
      image: "/menu/img_5938.jpeg",
        },
      {
        name: "Mediterranean Breakfast",
        price: 12,
        description:
          "Spicy beef sausage, 3 slices of grilled halloumi, 2 eggs, olives,feta cheese,tomatoes, cucumber & toast.",
      image: "/menu/img_5939.jpeg",
        },
      {
        name: "Bread Breakfast",
        price: 8,
        description:
          "Scrambled salmon served on sourdough toast with Scrambled eggs & salad garnish.",
      },
      { name: "Add Spicy Beef Sausage", price: 3 },
      { name: "Add Feta Cheese", price: 2.5 },
    
      {
        name: "Eggs Royale",
        price: 10,
        description:
          "2 Poached eggs,served on an English muffin with smoked salmon & hollandaise sauce & salad ",
      image: "/menus/img_5936.jpeg",
        },
      {
      name: "Add extra Avocado",
      price: 2.5,
    },
      {
        name: "Eggs Benedict",
        price: 10,
        description:
          "2 Poached eggs,served on an English muffin with smoked Salmon & hollandaise sauce salad garnish.",
      },
      {
        name: "Eggs Florentine",
        price: 9,
        description:
          "2 Poached eggs on an English muffin with spinach & hollandaise sauce with salad garnish.",
      },
    ],
  },

  {
    title: "Omelettes",
    items: [
      {
        name: "3 Eggs Omelette",
        price: 11.5,
        description:
          "Served with salad garnish, chips and a choice of 2 fillings: ham, bacon, cheese, mushrooms, onions, tomatoes, peppers, spinach or spicy beef sausage.",
        },
        {
      name: "Add extra filling",
      price: 1.5,
    },
    ],
  },

    {
  title: "Jacket Potatoes",
  items: [
    {
      name: "Jacket Potatoes",
      price: 9,
      description:
        "Served with a Salad Garnish, Chips and a choice of 2 fillings: Baked Beans, Tuna Mayo, Sweetcorn, Cheese, Bacon, Coleslaw, Cumberland Sausage or Spicy Beef Sausage.",
    },
    {
      name: "Add extra filling",
      price: 1.5,
    },
  ],
},


  {
    title: "Breakfast Wraps",
    note: "All wraps served salad,chips & a choice of sauce",
    items: [ 
      { name: "Grilled Halloumi & Avocado Wrap", price: 8 },
      { name: "Grilled Chicken Wrap", price: 9 },
      { name: "Lamb Shish Wrap", price: 9 },
      { name: "Grilled Halloumi Wrap", price: 7 },
    ],
  },

  {
    title: "Panini (Toasted)",
    items: [
      { name: "Ham & Cheese", price: 5.5 },
      { name: "Mozzarella, Grilled Mushrooms & Peppers", price: 4.5 },
      { name: "Pesto, Mozzarella & Tomatoes", price: 4.5 },
      { name: "Cheese & Tomatoes", price: 4 },
      { name: "Tuna Mayo Sweetcorn", price: 5.5 },
      { name: "Halloumi & Spicy Beef Sausage", price: 6.5 },
      { name: "Feta Cheese & Tomatoes", price: 4.5 },
      { name: "Grilled Onions, Ham & Cheese", price: 7 },
    ],
  },

  {
    title: "In Brioche",
    items: [
      { name: "Bacon, Egg, Cheese & Hash Brown", price: 8 },
      { name: "Spicy Beef Sausage, Egg, Cheese & Lettuce", price: 8.5 },
      { name: "Veggie Sausage, Egg, Cheese & Hash Brown", price: 7.5 },
      { name: "Avocado, Scrambled Egg & Crispy Bacon", price: 9 },
    ],
  },

  {
    title: "Salads",
    items: [
      { name: "Avocado & Halloumi Salad", price: 10, description: "Griiled Halloumi on salad leaves with Avocado, cherry tomatoes,cucumber,red onion & olive" },
      {
        name: "Grilled Chicken Salad",
        price: 11,
        description:
          "Chicken served on salad with cherry tomatoes, cucumber & red oninons.",
      },
      {
        name: "Tuna Salad",
        price: 10,
        description:
          "Tuna flakes served on salad with cherry tomatoes,cucumber,red onions & olives.",
      },
    ],
  },
];

/* ==========================
   ROMANIAN SPECIALS (POSTER)
   ========================== */
export const romanianSpecial: MenuSection[] = [
  {
    title: "Romanian Starters",
    items: [
      { name: "Humus", price: 3 },
      { name: "Tzatziki", price: 3 },
      { name: "Placinta-cu-Brahza", price: 3 },
      { name: "Vinete", price: 4 },
      { name: "Salata de Boeuf", price: 5 },
      { name: "Clatite cu Nutella", price: 5 },
      { name: "Salata de Vara (asorta feta)", price: 9 },
    ],
  },
  {
    title: "Romanian Mains",
    items: [
      { name: "Ciorba Fasole Ciolanafumat", price: 7 },
      { name: "Sarmale cu Mamaliga Smantana", price: 8 },
      { name: "Ciorba Perisoare", price: 8 },
      { name: "Ciorba Piu Greg", price: 8 },
      { name: "Musaka", price: 8 },
      { name: "Ciorba Burta", price: 9 },
      { name: "Snitel Cartofi Pragit Pireu", price: 10 },
      { name: "Mici Mustar Cartofi Pragiti", price: 10 },
      { name: "Ceate de Porc Cartofi Pragiti", price: 12 },
      { name: "Piept de Piu Gratar", price: 13 },
      { name: "Cotlete de Barbecuti", price: 16 },
      { name: "Peste Cusaramura Mamaliga Dorada", price: 20 },
      { name: "Platou Mixt Grill 2 pers / 4 pers", price: 40 },
    ],
  },
];



 