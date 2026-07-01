const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-800 mt-10 bg-gray-900">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Maira Tahir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;