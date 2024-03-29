import DarkToggle from '../components/DarkToggle';
import logo from '/logo.png';

function Topnav() {
  return (
    <nav className="px-6 flex justify-between w-full items-center">
      <div className="flex space-x-4 items-center">
        <img src={logo} className="w-8 h-8" />
        <h1 className="text-xl">ec.tailbite</h1>
      </div>
      <DarkToggle />
    </nav>
  );
}
export default Topnav;
