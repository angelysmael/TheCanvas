import Link from "next/link";

export default function Home() {
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
            <span className="view-all">View All →</span>
          </div>

          <div className="card">
            <h4>Featured Product 2</h4>
            <p>Description OR Image.</p>
            <span className="view-all">View All →</span>
          </div>

        </div>

      </div>

    </div>
  );
}