import React, { useState } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Drawer } from "./Drawer";

export const AppLayout = ({ children }) => {
  const isOffline = !navigator.onLine;
  const [Modal, setOp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-auto">
      {showMenu && (
        <div
          className="fixed inset-0 bg-black h-full z-[100] opacity-50"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <Drawer open={showMenu} setShowMenu={setShowMenu} />
      <header className="container bg-white mx-auto">
        <Navbar setOp={setOp} setShowMenu={setShowMenu} />
      </header>

      <main className={`${Modal ? "opacity-10" : ""}`}>
        {isOffline ? (
          <div className="text-center h-72">
            <p className="text-red-600 text-center h-72 flex items-center w-full justify-center">
              You are offline. Please check your internet connection.
            </p>
          </div>
        ) : 
           children 
        }
      </main>

      <footer className={`${Modal ? "opacity-10" : ""}`}>
        <Footer />
      </footer>
    </div>
  );
};
