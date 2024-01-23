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
  {
    name: "Ministries",
    children: [
      {
        path: "children",
        name: "Children",
      },
      {
        path: "youths",
        name: "Youths",
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
  {
    path: "blogs",
    name: "Blogs",
  },
  {
    path: "children",
    name: "Children",
  },
  {
    path: "youths",
    name: "Youths",
  },
];
