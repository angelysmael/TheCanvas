import Link from 'next/link';

const NavigationalBar = () => {
  return (
    <nav className="flex gap-8 p-6 bg-blue-100">
      <Link href="/">
      HOME
      </Link>

      <Link href="/Main">
      MAIN
      </Link>

      <Link href="/ContactForm">
      Contact Form
      </Link>

      <Link href="/TestPage">
      Test Page
      </Link>
      
    </nav>
  );
};

export default NavigationalBar;