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
        path: "gallery",
        name: "Gallery",
      },
      {
        path: "music",
        name: "Music",
      },
      {
        path: "books",
        name: "Books",
      },
    ],
  },
];
