"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/static-data";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      
      {/* Hamburger icon */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "26px",
          cursor: "pointer",
        }}
      >
        ☰
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "0",
            background: "white",
            padding: "15px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
            zIndex: 999,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;