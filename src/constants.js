export const POSTS = {
  1: {
    id: 1,
    content: "Check out our new product launch! 🚀 We're excited to bring you the latest innovation in tech. Share your thoughts in the comments below!",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      123: {
        id: 123,
        content: "This is a game-changer! Can't wait to get my hands on it.",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12112: {
            id: 12112,
            content: "Absolutely! The features look amazing.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12113: {
            id: 12113,
            content: "I'm a bit skeptical, but I'll give it a try.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
       124: {
        id: 124,
        content: "I've been waiting for this for years! Thank you for making it happen.",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          121121: {
            id: 121121,
            content: "Me too! It's going to revolutionize the industry.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          121131: {
            id: 121131,
            content: "I'm not sure about the pricing, but I'll consider it.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
  2: {
    id: 2,
    content: "We're giving away a free trip to Hawaii! 🌴 To enter, simply follow us and tag a friend in the comments below. Good luck!",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      125: {
        id: 125,
        content: "This is amazing! I'm entering right away.",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12114: {
            id: 12114,
            content: "Good luck to everyone entering!",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12115: {
            id: 12115,
            content: "I've always wanted to visit Hawaii!",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
  3: {
    id: 3,
    content: "Our team is growing! 🚀 We're hiring talented individuals to join our mission. Check out the careers page for more info.",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      126: {
        id: 126,
        content: "This is great news! I'm sending my resume right away.",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12116: {
            id: 12116,
            content: "Best of luck to all applicants!",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
   4: {
    id: 4,
    content: "Get ready for our biggest sale of the year! 🛍️ Stay tuned for the announcement and mark your calendars.",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      127: {
        id: 127,
        content: "I've been waiting for this! Can't miss out on the deals.",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12117: {
            id: 12117,
            content: "Me too! It's the perfect time to upgrade.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12118: {
            id: 12118,
            content: "I hope they have discounts on the new products.",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
};