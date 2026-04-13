"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationalBar() {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      
      <ul>

        <li className={pathname === "/" ? "active" : ""}>
          <Link
            href="/"
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

        <li className={pathname === "/Main" ? "active" : ""}>
          <Link
            href="/Main"
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

        <li className={pathname === "/ContactForm" ? "active" : ""}>
          <Link
            href="/ContactForm"
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