"use client";
import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  let buttonStyle = "border-black";
  let buttonText = "Submit";
  
  if (on) {
    buttonStyle = "bg-blue-600";
    buttonText = "Submitted!";
  }

  return (
    <div>
      <p>Test button component with state management:</p>
      
      <button 
        onClick={() => setOn(!on)}
        className={`p-5 rounded-xl border transition-all ${buttonStyle}`}
      >
        {buttonText}
      </button>
    </div>
  );
}