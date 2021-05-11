import React from "react";
import Header from "./Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="error-container">
        <h1>404 Page Not Found!</h1>
        <code>kthxbye</code>
      </main>
    </>
  );
};

export default NotFound;
