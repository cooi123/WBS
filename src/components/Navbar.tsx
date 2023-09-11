import React, {useState} from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-gray-800 text-xl font-bold" href="index.html">
              <img src="assets/img/logo/logo.png" alt="Logo" className="h-8" />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex items-center space-x-6">
                <li>
                  <a href="/" className="text-gray-800 hover:text-gray-600">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    View All Products
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-800 hover:text-gray-600"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={
            isMobileMenuOpen ? "block mt-4" : "hidden mt-4 mobile-menu"
          }
        >
          <a
            href="index.html"
            className="block text-gray-800 hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="shop.html"
            className="mt-2 block text-gray-800 hover:text-gray-600"
          >
            View All Products
          </a>
          <a
            href="Aboutus.html"
            className="mt-2 block text-gray-800 hover:text-gray-600"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="mt-2 block text-gray-800 hover:text-gray-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
