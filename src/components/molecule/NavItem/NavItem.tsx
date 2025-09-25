import { NextPage } from 'next';

interface NavItemProps {
  text: string;
}

const NavItem: NextPage<NavItemProps> = ({ text }) => {
  return (
    <li>
      <a href="#" className="text-gray-700 hover:text-blue-600 transition">
        {text}
      </a>
    </li>
  );
};

export default NavItem;
