import search from "../images/search.png";
import trending from "../images/trending.png";

import pairs from "../images/pairs.png";
import token from "../images/token.png";
import Discord from "../images/Discord.png";
import Group from "../images/Group.png";
import Twitter from "../images/Twitter.png";
import Telegram from "../images/Telegram.png";

const Header = () => {
  return (
    <header className=" px-2 py-6 flex ">
      <div className=" bg-[black] rounded-md border-2 flex w-[40%] border-slate-600 ">
        <img className="mx-2 my-4 h-4 w-4" src={search} alt="logo" />
        <input
          className="bg-[black] border-[transparent] w-[100%]  font-light text-[white]"
          type="text"
          placeholder="Search pair by name,symbol,pair or tooken address"
        />
      </div>

      <img className="mr-4 my-4 ml-6" src={trending} alt="logo" />
      <p className="text-[white] font-normal text-sm px-2 py-4">TRENDING</p>

      <img className="mx-4 my-4" src={pairs} alt="logo" />
      <p className="text-[white] font-normal text-sm px-2 py-4 ">NEW PAIRS</p>

      <img className="mx-4 my-4" src={token} alt="logo" />
      <p className="text-[white] font-normal text-sm px-2 py-4 ">LIST TOKEN</p>

      <img className="ml-10 mr-2 my-4" src={Twitter} alt="logo" />
      <img className="mx-2 my-4" src={Telegram} alt="logo" />
      <img className="mx-2 my-4" src={Discord} alt="logo" />
      <img className="mx-2 my-4" src={Group} alt="logo" />
      <p className="text-[white] font-normal text-sm px-2 py-4">$297.12</p>
    </header>
  );
};

export default Header;
