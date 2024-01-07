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
];
