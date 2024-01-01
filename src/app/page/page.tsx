import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>This is the custom page props, where the name is </h1>;
    </div>
  );
};

export default Page;
