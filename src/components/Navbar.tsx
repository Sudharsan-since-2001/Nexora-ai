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
    <nav className="fixed top-8 left-0 w-full z-50 px-4 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white border-black-4 shadow-brutalist flex items-center justify-between p-6 rounded-2xl">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-3xl font-black bg-black text-white px-3 py-1 rounded-lg">N</span>
            <span className="text-2xl font-black tracking-tighter uppercase italic">nexora</span>
          </Link>

          <div className="hidden lg-flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-black uppercase tracking-widest transition-all rounded-xl ${location.pathname === link.path
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-slate-100'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="block lg:hidden">
            <button className="brutalist-btn bg-yellow-400 p-2">
              <span className="font-black text-xs">MENU</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
