import Link from "next/link";

export default function NavigationalBar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
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

        <li>
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

        <li>
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