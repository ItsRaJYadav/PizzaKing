const pizzas = [
    {
      name: "Peppy Paneer Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      category: "pizza",
      image: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
      description: "This is an Indian twist to the pizza which uses paneer or cottage cheese. The base is made of a mixture of whole wheat flour and all-purpose flour or simply whole wheat flour. Cornmeal can also be added to the dough to give it a crunchy texture. For toppings, diced paneer coated with spices, green olives and green capsicum is used. It is seasoned with some black pepper and red chilli flakes.",
    },
    {
      name: "Farmhouse  Classic Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Farmhouse-Pizza-960x540.jpg.webp",
      description:
        "It is a famous, authentic Italian style pizza. It is available in almost every pizza corner. It includes mushroom, tomato, capsicum, tomatoes and red onions as toppings. Mozzarella cheese, goats’ cheese, spinach and caramelized onions are also used. The base is made of all-purpose flour and regular pizza sauce is used to make it."
    },
    {
      name: "Aussie Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "It is the Australian-style pizza, hence, the name. Barbecue sauce is used to make it. It is then topped with mozzarella cheese, ham, chopped bacon and a few eggs. It is delicious. To enhance the flavor even more, veggies like bell peppers, onions, garlic and mushroom can also be added to it.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Aussie-Pizza.jpg.webp",
    },
    {
      name: "Margherita Classic Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      category: "pizza",
      image: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg",
      description:
        "It is a typical Neapolitan pizza. It is made using tomatoes, fresh basil leaves, salt and extra-virgin olive oil. The tomatoes used for this dish are not the usual ones; they are San Marzano tomatoes, which is a variety of plum tomato. Margherita pizza is made with marinara sauce. Sometimes, parmesan cheese is also added.",
    },
    {
      name: "Cheese N Corn Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Cheese-N-Corn-Pizza-960x540.jpg.webp",
      description:
        "It is a very tasty and easy dish to make. For this, you will need only pizza base, sauce, cheese, corns and mixed herbs. Any type of cheese can be used but the most preferred one is the mozzarella. Mixed herbs such as oregano and chilli flakes are used for extra flavor.",
    },
    {
      name: "BBQ Chicken Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "pizza",
      image: "https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg",
      description:
        "It is an amazing dish to try for all the chicken lovers. It is made using barbecue sauce, chicken, red onions and lots of cheese. The chicken is pre-cooked for a few minutes. Then, it is tossed in a little barbecue sauce to prevent it from getting dried up. For cheese, any type can be used but a combination of mozzarella and gouda cheese just takes it to another level!",
    },
    {
      name: "Pepperoni Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Pepperoni-pizza-960x640.jpg.webp",
      description: "This pizza is made using pepperoni, i.e., spicy meat mixture made from pork and beef. It is a simple yet tasty dish. It is made in the same way as any regular pizza is made. But the main topping here is pepperoni. The seasoning used is a mixture of red chilli powder and paprika.",
    },
    {
      name: "Spring Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Spring-Pizza.jpg.webp",
      description:
        "It is a healthier version of the regular pizza. For this, asparagus, fresh chives and garlic is used. Ground black pepper is added to elevate the taste. Typically, fontina cheese is used but it can be made with any cheese available.",
    },
    {
      name: "Paneer Makhni Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Paneer-Makhni-Pizza-889x420.jpg.webp",
      description:
        "This is yet another Indian variation of pizza. It does not use the regular pizza sauce. Rather, it uses makhni gravy. The makhni gravy is made using onions, red chilllies, tomatoes, green chillies and cashews along with other spices. The paneer is cooked separately in the typical tikka style. Then, all of these are assembled to make this delicious dish which you must try, if you come to India.",
    },
    {
      name: "Hawaiian Pizza ",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      category: "pizza",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Hawaiian-Pizza-960x720.jpg.webp",
      description:
        "It is a Canadian-originated pizza. The topping used for this pizza is something different from the usual ones. It uses pineapple and either ham or bacon. Pineapple on a pizza is still an arguable debate, but who cares if the taste is amazing? Do give this unique dish a try!",
    },
    {
      name: "Pizza Capricciosa",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      category: "pizza",
      image: "https://www.crazymasalafood.com/wp-content/images/2022/01/Pizza-Capricciosa.jpg",
      description:
        "It is a typical Italian pizza. It is made with mozzarella cheese, baked ham mushrooms, artichoke and tomatoes. Other versions also use marinated artichoke hearts, olives and basil leaves. If you want to have a typical Italian pizza, do try this!",
    },
    {
      name: "Kale And Sausage Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "If you feel like having pizza but want to keep it healthy, this pizza is for you! It is somewhat healthy as it uses kale leaves. Lacinato kale is used to make it. Instead of mozzarella, finely grated Pecorino Romano cheese is used. It is seasoned with freshly ground black pepper and kosher salt.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Kale-And-Sausage-Pizza-960x640.jpg.webp",
    },
    {
      name: "Mac N Cheese Pizza ",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "If you want to give a crazy twist to your pizza, try this one! Instead of pizza sauce, this uses macaroni and cheese. Any cheese like mozzarella, gouda, parmesan, cheddar can be used. Bacon, sliced hot dogs can also be used for extra flavor. If you are a pizza lover as well as mac n cheese lover, you must try this one!",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Mac-N-Cheese-Pizza-960x540.jpg.webp ",
    },
    {
      name: "Deluxe Veggie Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "As the name suggests, this one is loaded with veggies. Onions, capsicums, mushrooms, paneer, corn are used as toppings. If you want to have a more exotic version, smoked ham and pepperoni can also be added. This is a go-to-pizza for any pizza lover. And it tastes yum!",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Deluxe-Veggie-Pizza-960x640.jpg.webp",
    },
    {
      name: "Mexican Green Wave Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "It is a Mexican style pizza. The toppings used for this are crunchy onions, juicy tomatoes, different types of bell peppers and jalapeno. The actual taste of this pizza attributes to the presence of Mexican herbs over the toppings. These herbs include coriander, allspice, thyme, cloves, Mexican oregano and cumin.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Mexican-Green-Wave-Pizza-960x636.jpg.webp",
    },
    {
      name: "Potato And Rosemary Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "This is a very simple pizza dish. It uses paper-thin sliced potatoes, olive oil, rosemary and Parmigiano-reggiano. Cheese can be added or skipped depending on one’s personal choice. Spices such as oregano, crushed red pepper and thyme are used to season it.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Potato-And-Rosemary-Pizza-960x533.jpg.webp",
    },
    {
      name: "Quattro Formaggi",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "It is a typical Italian pizza. Four different types of cheese are used to make it. The regular pizza sauce may or may not be used. The main four types of cheese are mozzarella, fontina, gorgonzola and parmigiano. This pizza is loaded only and only with cheese. If you are a cheese lover, you must try this pizza.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Quattro-Formaggi-960x640.jpg.webp",
    },
    {
      name: "Mushroom-Fontina Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "This pizza tastes great. Different types of mushrooms such as shiitake, portobellos, button and oyster are used. These are very thinly sliced and added as toppings. Only fontina cheese is used to make it. Thyme, onions and sour cream can be added for extra taste. Nothing tastes better than a mushroom-fontina pizza along with a fried egg.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Mushroom-Fontina-Pizza-960x540.jpg.webp",
    },
    {
      name: "Indi Tandoori Paneer Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "It is another Indian variation of the classic pizza.  The paneer is marinated in tandoori masala and then fried. It is then assembled on an all-purpose flour pizza base along with capsicum and red paprika. Mint mayonnaise is drizzled over it which gives it an amazing taste.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Indi-Tandoori-Paneer-Pizza-960x540.jpg.webp",
    },
    {
      name: "Pesto Pizza",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      category: "pizza",
      description:
        "It tastes delicious. It is loaded with pesto, corn, goat cheese and sun-dried tomatoes. Mozzarella cheese can also be added. A generous layer of pesto is spread before baking and then after baking, another layer is spread. This makes it taste mind-blowing.",
      image: "https://crazymasalafood.com/wp-content/images/2022/01/Pesto-Pizza-960x640.jpg.webp",
    },
    
  ];
  export default pizzas;