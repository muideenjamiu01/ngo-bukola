import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assests/diary-logo.png";
import Logo2 from "../assests/dpi.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed h-24 w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        {/* Desktop Menu */}
        <div className="flex">
          <Link to="/" className="">
            <img src={Logo} className="w-full h-20 pb-2" />
          </Link>
          <Link to="/" className="">
            <img src={Logo2} className="w-full h-20 pb-2" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
