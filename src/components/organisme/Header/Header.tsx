import NavItem from '@/components/molecule/NavItem/NavItem';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <nav>
        <ul className="flex space-x-6">
          <NavItem text="خانه" />
          <NavItem text="ویژگی‌ها" />
          <NavItem text="قیمت‌ها" />
          <NavItem text="نقشه راه" />
        </ul>
      </nav>
      <h1 className="text-2xl font-bold text-blue-600">Pulse</h1>
    </header>
  );
};

export default Header;
