import { NextPage } from 'next';
import Link from 'next/link';

interface NavItemProps {
  text: string;
}

const NavItem: NextPage<NavItemProps> = ({ text }) => {
  return (
    <li>
      <Link href="#" className="text-gray-700 hover:text-blue-600 transition">
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
