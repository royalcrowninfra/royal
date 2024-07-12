import { Link } from 'lucide-react';
import logo from '../public/logo.jpg';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
        <Image src={logo} width={160} height={55} alt=''/>
    </Link>
  )
}

export default Logo
