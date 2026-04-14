"use client";

import { useState } from "react";
import Image from "next/image";

export default function Main() {
  // stores whether the product has been liked or not
  const [liked, setLiked] = useState(false);

  // stores whether details should be shown or hidden
  const [showDetails, setShowDetails] = useState(false);

  // stores which product is currently selected
  const [selectedProduct, setSelectedProduct] = useState("Product 1");

  return (
    <div>
      <h1>MAIN</h1>
      <p>This is the MAIN PAGE.</p>
      <br />

      <p>Test image component:</p>
      <Image
        src="/next.svg"
        width={250}
        height={250}
        alt="Test Image"
      />

      <br />
      <br />

      <h2>Choose a Product</h2>

      {/* when clicked, this button changes the selected product */}
      <button onClick={() => setSelectedProduct("Product 1")}>
        Product 1
      </button>

      {/* when clicked, this button changes the selected product */}
      <button onClick={() => setSelectedProduct("Product 2")}>
        Product 2
      </button>

      <p>Currently Selected: {selectedProduct}</p>

      <br />

      {/* toggles liked state between true and false */}
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Liked ❤️" : "Like 🤍"}
      </button>

      <br />
      <br />

      {/* toggles details section on and off */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {/* only shows this section if showDetails is true */}
      {showDetails && (
        <div>
          <p>
            Here are more details about <strong>{selectedProduct}</strong>.
          </p>
          <p>This section only appears when the button is clicked.</p>
        </div>
      )}
    </div>
  );
}