import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="spice-decoration">🎃</div>
          <h1 className="hero-title">
            Fall In Love With
            <span className="gradient-text">Pumpkin Spice</span>
          </h1>
          <p className="hero-subtitle">
            The perfect blend of autumn spices, creamy steamed milk, and rich espresso. 
            Your cozy companion for crisp fall days.
          </p>
          <button className="cta-button">
            Order Now
          </button>
        </div>
        <div className="hero-image">
          <div className="latte-cup">☕</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What Makes It Special</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Real Pumpkin</h3>
            <p>Made with real pumpkin puree, not artificial flavors</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧡</div>
            <h3>Perfect Spice Blend</h3>
            <p>Cinnamon, nutmeg, ginger, and cloves in perfect harmony</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>Single-origin espresso beans roasted to perfection</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Cozy This Fall</h2>
          <p>Get exclusive pumpkin spice recipes and seasonal offers delivered to your inbox</p>
          
          {!isSubscribed ? (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          ) : (
            <div className="success-message">
              <span>🎉</span>
              <p>Welcome to the pumpkin spice family!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Pumpkin Spice Co. Made with 🧡 for fall lovers</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
