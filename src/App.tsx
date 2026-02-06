import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AISolutions from './pages/AISolutions';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';

// Updated footer design - Feb 6, 2026

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer style={{ padding: '3rem 0 2rem', background: '#ffffff', borderTop: '3px solid #000', marginTop: '8rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '3rem', flexWrap: 'wrap', gap: '3rem' }}>
            <div style={{ maxWidth: '400px' }}>
              <div className="flex items-center gap-2 text-2xl font-bold" style={{ marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', background: '#39e3fb', border: '3px solid #000', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}>N</div>
                <span>nexora</span>
              </div>
              <p style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.7', color: '#64748b', marginBottom: '1.5rem' }}>
                The next evolution of agency performance. Combining elite digital marketing with advanced AI automation to scale your business.
              </p>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>
                <a href="mailto:hello@nexora.ai" style={{ color: '#1a1a1a', textDecoration: 'none', borderBottom: '2px solid #39e3fb', paddingBottom: '2px' }}>hello@nexora.ai</a>
                <span style={{ color: '#cbd5e1' }}>|</span>
                <a href="tel:+1234567890" style={{ color: '#1a1a1a', textDecoration: 'none', borderBottom: '2px solid #ffde59', paddingBottom: '2px' }}>+1 (234) 567-890</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '5rem' }}>
              <div>
                <h4 style={{ fontWeight: '700', marginBottom: '1.25rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a1a' }}>Our Product</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '14px', fontWeight: '500' }}>
                  <li><a href="/services" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Digital Marketing</a></li>
                  <li><a href="/ai-solutions" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>AI Automation</a></li>
                  <li><a href="/portfolio" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Case Studies</a></li>
                  <li><a href="/blog" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Insights</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontWeight: '700', marginBottom: '1.25rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#1a1a1a' }}>Company</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '14px', fontWeight: '500' }}>
                  <li><a href="/about" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>About Us</a></li>
                  <li><a href="/team" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Team</a></li>
                  <li><a href="/contact" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Contact</a></li>
                  <li><a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#1a1a1a'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontWeight: '500', fontSize: '13px', color: '#94a3b8' }}>
              © 2026 Nexora AI Agency. All rights reserved. designed by{' '}
              <a
                href="https://portfolio-sudharsan-karthikeyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#1a1a1a', fontWeight: '700', textDecoration: 'none', borderBottom: '2px solid #39e3fb', paddingBottom: '1px' }}
                onMouseOver={(e) => e.currentTarget.style.borderBottomColor = '#ffde59'}
                onMouseOut={(e) => e.currentTarget.style.borderBottomColor = '#39e3fb'}
              >
                SUDHARSAN
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
