"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // state to control showing details for each product
  const [showProduct1, setShowProduct1] = useState(false);
  const [showProduct2, setShowProduct2] = useState(false);

  return (
    <div className="home-container">
      <div className="home-main">
        
        <h1 className="logo">THE CANVAS</h1>

        <h2 className="hero-title">
          Discover Products. Simplified.
        </h2>

        <p className="hero-text">
          A platform to...input text.
        </p>

        <Link href="/Main" style={{ textDecoration: "none" }}>
          <button className="hero-btn">
            Explore Products
          </button>
        </Link>

        <div className="cards">
          
          <div className="card">
            <h4>Featured Product 1</h4>
            <p>Description OR Image.</p>

            {/* button instead of span for interaction */}
            <button
              className="view-all"
              onClick={() => setShowProduct1(!showProduct1)}
            >
              {showProduct1 ? "Hide Details ↑" : "View All →"}
            </button>

            {/* only shows when clicked */}
            {showProduct1 && (
              <p className="extra-info">
                More details about Featured Product 1.
              </p>
            )}
          </div>

          <div className="card">
            <h4>Featured Product 2</h4>
            <p>Description OR Image.</p>

            <button
              className="view-all"
              onClick={() => setShowProduct2(!showProduct2)}
            >
              {showProduct2 ? "Hide Details ↑" : "View All →"}
            </button>

            {showProduct2 && (
              <p className="extra-info">
                More details about Featured Product 2.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}