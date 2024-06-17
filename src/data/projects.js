const data = [
  {
    id: '1',
    title: 'Trader Joes',
    description:
      'Created a shopping website for Trader Joes using the MERN stack. Helping the customers to order groceries online and a checkout option with PayPal API ',
    image: {
      src: '../Images/Traderjoes.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://ecommerce-jg5e.onrender.com/',
      repo: 'https://github.com/AditiChikkali/Ecommerce_Website',
    },
    technologies: [
      '#JavaScript',
      '#reactJS',
      '#mongoDB',
      '#express',
      '#redux',
      '#bootstrap',
      '#nodejs',
    ],
  },
  {
    id: '2',
    title: 'A Byte of yummy',
    description:
      'A food application using API that helps you to get instructions for every recipe you want and the list of ingredients as well',
    image: {
      src: '../Images/food.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://food-recipe-app-gold.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/FoodRecipeApp',
    },
    technologies: [
      '#javaScript',
      '#react',
      '#restapi',
      '#bootstrap',
    ],
  },
  {
    id: '3',
    title: 'CocktailQuest',
    description:
      'CocktailQuest is a dynamic web app that empowers users to explore a vast array of cocktails by offering a robust search feature and detailed information including categories, ingredients, and preparation instructions.',
    image: {
      src: '../Images/cocktail.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://cocktail-quest-nine.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/CocktailQuest',
    },
    technologies: [
      '#JavaScript',
      '#react',
      '#restapi',
      '#carousels',
      '#html',
      '#css',
    ],
  },
  {
    id: '4',
    title: ' To-do List',
    description:
      'A To-do list using react for managing our daily tasks. You can create new tasks and delete the completed ones',
    image: {
      src: '../Images/todo.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://todo-list-82vwc1zmi-rutuja1805.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/TODO_List',
    },
    technologies: [
      '#react',
      '#redux',
      '#JavaScript',
      '#css',
      '#html',
    ],
  },
  {
    id: '5',
    title: 'Expense Tracker App',
    description:
      'Built a React-based expense tracker for efficient financial management. Allows users to monitor spending, categorize expenses, and track budgets seamlessly.',
    image: {
      src: '../Images/expense.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://expense-tracker-app-sand.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/ExpenseTrackerApp',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#mongodb',
      '#react-query',
    ],
  },
  {
    id: '6',
    title: 'Rock Paper Scissors',
    description:
      'Created an engaging Rock, Paper, Scissors game featuring player vs. computer functionality. Users can input their choice, and the program generates a random selection for the computer. ',
    image: {
      src: '../Images/rock.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://rock-paper-scissors-dun.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/rock_paper_scissors',
    },
    technologies: [
      '#JavaScript',
      '#html',
      '#css',
    
    ],
  },
  {
    id: '7',
    title: 'Blog App',
    description:
      'You can create your blogs and post them within your profile you can also view the blogs posted by other users view them and find the information of the author. Only the author of the post can edit the post',
    image: {
      src: '../Images/blog.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/Rutuja-Ghogare/blog_app',
      // repo: 'https://github.com/vsnaichuk/RN-places',
    },
    technologies: [
      '#react-native',
      '#jwt',
      '#redux',
      '#redux-toolkit',
      '#material-ui',
      '#nodejs',
      '#express',
      '#mongodb',
    ],
  },
  {
    id: '8',
    title: 'Customer Care App',
    description:
      'Built an application to provide consumer services. This application would allow customers to submit service requests online, track the status of their requests, and also message their customer support representatives.',
    image: {
      src: '../Images/customer.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/Rutuja-Ghogare/Customer_Care',
      // repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
    },
    technologies: [
      '#react',
      '#JavaScript',
      '#python',
      '#Django',
      '#restapi',
    ],
  },
  {
    id: '9',
    title: 'Spotify Clone',
    description:
      'Created a Spotify clone for a seamless music streaming experience',
    image: {
      src: '../Images/Spotify.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://spotify-clone-sepia-gamma.vercel.app/',
      repo: 'https://github.com/Rutuja-Ghogare/spotify-clone',
    },
    technologies: [
      '#react',
      '#JavaScript',
      '#NextJs',
      '#Supabase',
      '#TailwindCSS',
    ],
  },

  {
    id: '10',
    title: 'Image Generation App',
    description:
      ' Developed a full-stack MERN application inspired by OpenAIs DALL-E',
    image: {
      src: '../Images/dalle.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/Rutuja-Ghogare/Image-generation-app/tree/main',
      // repo: 'https://github.com/Rutuja-Ghogare/spotify-clone',
    },
    technologies: [
      '#react',
      '#MongoDB',
      '#Node.js',
      '#OpenAI API',
      '#TailwindCSS',
    ],
  },
];

export default data;
