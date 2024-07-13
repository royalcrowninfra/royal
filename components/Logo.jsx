import { Link } from 'lucide-react';
import logo from '../public/logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    // <Link href='/'>
        <Image src={logo} width={160} height={55} alt='logo'/>
    // </Link>
  )
}

export default Logo
