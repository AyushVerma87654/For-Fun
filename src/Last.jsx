import React, { useState, useEffect } from "react";
import AllRoutes from "./AllRoutes";
import { UserContext } from "./Context";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Last() {
  const [name, setName] = useState("");
  useEffect(() => {
    const savedName = localStorage.getItem("name") || "";
    setName(savedName);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name, setName }}>
        <NavBar />
        <AllRoutes />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default Last;
