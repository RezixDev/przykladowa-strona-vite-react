import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        <Link to="/" className="text-black hover:text-gray-700 font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-gray-700 font-semibold">
          O Projekcie
        </Link>
      </div>
    </nav>
  )
}