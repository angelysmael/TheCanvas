"use client";

import { useState } from "react";

export default function ContactFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Contact Form</h1>
      <p>This is a CONTACT FORM with simple state management.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {/* Name */}
        <div>
          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label>Email Address *</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Message */}
        <div>
          <label>Message *</label>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        {/* Messages */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {submitted && (
          <p style={{ color: "green" }}>Form submitted successfully!</p>
        )}
      </form>

      {/* Footer */}
      <footer style={{ marginTop: "40px" }}>
        <h2>The Canvas</h2>
        <p>© 2026 All rights reserved.</p>
      </footer>
    </main>
  );
}