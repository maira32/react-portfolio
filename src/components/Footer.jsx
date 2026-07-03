const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 text-center border-t border-gray-800 mt-10 bg-gray-900">
      <p className="text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Maira Tahir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;