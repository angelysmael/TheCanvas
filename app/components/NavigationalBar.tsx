"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavigationalBar() {
  const pathname = usePathname();

  // small state to track last clicked nav item
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div className="sidebar">
      
      <ul>

        <li className={activeLink === "/" ? "active" : ""}>
          <Link
            href="/"
            onClick={() => setActiveLink("/")}
            style={{
              display: "block",
              width: "100%",
              color: "inherit",
              textDecoration: "none",
              padding: "12px"
            }}
          >
            🏠 Home
          </Link>
        </li>

        <li className={activeLink === "/Main" ? "active" : ""}>
          <Link
            href="/Main"
            onClick={() => setActiveLink("/Main")}
            style={{
              display: "block",
              width: "100%",
              color: "inherit",
              textDecoration: "none",
              padding: "12px"
            }}
          >
            🔍 Explore
          </Link>
        </li>

        <li className={activeLink === "/ContactForm" ? "active" : ""}>
          <Link
            href="/ContactForm"
            onClick={() => setActiveLink("/ContactForm")}
            style={{
              display: "block",
              width: "100%",
              color: "inherit",
              textDecoration: "none",
              padding: "12px"
            }}
          >
            ✉ Contact
          </Link>
        </li>

      </ul>

    </div>
  );
}