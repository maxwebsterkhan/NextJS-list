import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image alt='document logo' src='/logo.png' width={77} height={77} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/list'>
        <a>List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
