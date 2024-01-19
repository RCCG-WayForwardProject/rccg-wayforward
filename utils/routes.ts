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
    path: "musics",
    name: "Musics",
  },
  {
    name: "Archive",
    children: [
      {
        path: "books",
        name: "Books",
      },
      {
        path: "blogs",
        name: "Blogs",
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
  // {
  //   name: "Counselling",
  //   path: "counselling",
  // },
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
  {
    path: "blogs",
    name: "Blogs",
  },
];
