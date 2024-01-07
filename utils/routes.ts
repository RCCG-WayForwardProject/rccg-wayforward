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
];
