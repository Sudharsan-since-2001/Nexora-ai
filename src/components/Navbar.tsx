import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Marketing Services', path: '/services' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Team', path: '/team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-cyan-400 border-2 border-black rounded flex items-center justify-center">N</div>
            <span>nexora</span>
          </Link>

          <div className="flex items-center" style={{ gap: '3rem' }}>
            <div className="hidden lg:flex items-center" style={{ gap: '3rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold text-sm transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-black underline' : 'text-slate-600'
                    }`}
                  style={{ padding: '0 1rem' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
