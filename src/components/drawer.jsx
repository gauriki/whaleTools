import logo from "../images/logo.png";
import dashboard from "../images/dashboard.png";
import trend from "../images/trend.png";
import pair from "../images/pair.png";
import chart from "../images/chart.png";

const Drawer = () => {
  return (
    <div className="bg-[#121212] w-60 px-4 ">
      <div className="flex">
        <img className="ml-4 mt-4" src={logo} alt="logo" />
        <div>
          <p className=" text-[#fff] pt-4 pl-2 font-light text-[14px]">
            Crypto Scouting
          </p>
          <p className="font-semibold text-[18px] pl-2 text-[#F26944]">
            Report
          </p>
        </div>
      </div>
      <div className="flex mt-10 bg-[#19293B] rounded-md p-4">
        <img className="pl-4" src={dashboard} alt="logo" />
        <p className="font-normal text-sm pl-6 text-[#fff]">Dashboard</p>
      </div>
      <div className="flex  mt-2  rounded-md p-4">
        <img className="pl-4" src={trend} alt="logo" />
        <p className="font-normal text-sm pl-6 text-[#fff]">Trending</p>
      </div>
      <div className="flex  mt-2  rounded-md p-4">
        <img className="pl-4" src={chart} alt="logo" />
        <p className="font-normal text-sm pl-6 text-[#fff]">Chart</p>
      </div>
      <div className="flex  mt-2  rounded-md p-4">
        <img className="pl-4" src={pair} alt="logo" />
        <p className="font-normal text-sm pl-6 text-[#fff]">New Pairs</p>
      </div>
    </div>
  );
};

export default Drawer;
