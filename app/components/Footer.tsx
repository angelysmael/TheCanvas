const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="flex flex-col items-center">
        
        <p>The Canvas</p>
        
        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;