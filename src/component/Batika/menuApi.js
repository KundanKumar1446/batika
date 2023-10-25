const Menu = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg",
      name: "Rose",
      category: "flower",
      price: "12₹",
      description:
        "I love flower realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
  
    {
      id: 2,
      image: "https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg",
      name: "strawberry",
      category: "fruits",
      price: "20₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg",
      name: "Red-Dhalia",
      category: "flower",
      price: "10₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/51K498qeg7S.jpg",
      name: "design",
      category: "decorate flower",
      price: "50₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 5,
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-707450939-1585077934.jpg?crop=1.00xw:0.334xh;0,0.238xh&resize=1200:*",
      name: "oranges",
      category: "fruits",
      price: "80₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 6,
      image: "data:image/jpeg;base64,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",
      name: "xy",
      category: "plant",
      price: "180₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
      name: "yz",
      category: "plant",
      price: "60₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 8,
      image: "https://5.imimg.com/data5/CP/WM/DV/SELLER-34515255/mandap-decorative-flowers-500x500.jpg",
      name: "Wedding flower",
      category: "decorate flower",
      price: "60₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 9,
      image: "https://purewows3.imgix.net/images/articles/2021_02/high-protein-fruits-guava.jpg?auto=format,compress&cs=strip",
      name: "Gauva",
      category: "fruits",
      price: "10₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
  ];
  
  export default Menu;
  