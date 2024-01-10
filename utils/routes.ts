export const pageRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About",
  },
  {
    path: "sermons",
    name: "Sermons",
  },
  {
    name: "Archive",
    children: [
      {
        path: "musics",
        name: "Musics",
      },
      {
        path: "books",
        name: "Books",
      },
    ],
  },
  {
    name: "Events",
    children: [
      {
        path: "events",
        name: "Events",
      },
      {
        path: "testimonies",
        name: "Testimonies",
      },
    ],
  },
  {
    name: "Counselling",
    children: [
      {
        name: "Book counselling session",
      },
      {
        name: "How it works",
      },
    ],
  },
];

export const mobilePageRoutes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About",
  },
  {
    path: "sermons",
    name: "Sermons",
  },
  {
    path: "musics",
    name: "Musics",
  },
  {
    path: "books",
    name: "Books",
  },
  {
    path: "events",
    name: "Events",
  },
  {
    path: "testimonies",
    name: "Testimonies",
  },
];
