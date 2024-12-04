import React, { useState } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";

export const AppLayout = ({ children }) => {
  const [Modal, setOp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-auto">
      {showMenu && (
        <div className="fixed inset-0 bg-black h-full opacity-50"></div>
      )}
      <Drawer open={showMenu} setShowMenu={setShowMenu} />
      <header className="container bg-white mx-auto">
        <Navbar setOp={setOp} setShowMenu={setShowMenu} />
      </header>

      <main className={`${Modal ? "opacity-10" : ""}`}>{children}</main>

      <footer className={`${Modal ? "opacity-10" : ""}`}>
        <Footer />
      </footer>
    </div>
  );
};
