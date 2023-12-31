import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "40000px",
        paddingTop: "100px",
      }}
    >
      <h1>This is the custom page props, where the name is </h1>;
    </div>
  );
};

export default Page;
