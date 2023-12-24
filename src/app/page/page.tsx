import React from "react";

interface PageProps {
  name: string;
}

const Page: React.FC<PageProps> = ({ name }) => {
  return <h1>This is the custom page props, where the name is {name} </h1>;
};

export default Page;
