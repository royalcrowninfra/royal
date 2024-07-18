import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";

const Logo = ({ height }) => {
  return (
    <Link href='/'>
      <Image src={logo} className='h-16 object-contain' alt='logo' />
    </Link>
  );
};

export default Logo;
