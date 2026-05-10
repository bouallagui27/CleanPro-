import {Link} from 'react-router-dom';
import AuthPage from './AuthPage';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-evenly px-8 py-4 bg-bg-primary border-b border-border-card">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-brand-purple text-2xl">✦</span>
        <span className="text-text-primary font-semibold text-lg">CleanPro</span>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8">
        {['Services', 'Pricing', 'Gallery', 'Reviews'].map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-brand-purple transition-colors text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>
        <div>
      {/* Dashboard Button */}
      <button className="px-4 py-2 text-sm border border-brand-purple text-brand-purple rounded-lg hover:bg-brand-purple hover:text-white transition-all">
        Dashboard
      </button>
      <Link to="/AuthPage">
        <button className="px-4 ml-5 py-2 text-sm border border-brand-purple text-brand-purple rounded-lg hover:bg-brand-purple delay-75 hover:text-white transition-all">
          SignUp
        </button>
      </Link>
      </div>
    </nav>
  )
}

export default Navbar