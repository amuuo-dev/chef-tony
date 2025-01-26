import chefImg from "../../public/chef-claude-icon.png";
const Header = () => {
  return (
    <header className="flex justify-center items-center shadow-sm bg-white gap-[11px] h-[80px]">
      <img src={chefImg} alt="chef logo" className="w-[50px]" />
      <h1 className="font-normal text-2xl">Chef Ducci</h1>
    </header>
  );
};

export default Header;
