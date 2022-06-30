import act from "../images/act.png";
import eye from "../images/eye.png";

const ActivePair = () => {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex items-center">
        <img src={act} alt="icon" className="w-6" />
        <p className="text-[white] font-semi-bold text-[18px] pl-2">
          ACTIVE PAIRS
        </p>
      </div>

      <div className="bg-[#FBC70E] flex flex-1 mx-2 items-center p-1 justify-between rounded-lg  text-center ">
        <p className="text-[black] font-bold text-sm pl-4">YOUR TOKEN HERE</p>
        <div className="flex items-center">
          <p className="text-[black] font-light text-sm pr-4">
            SPONSORED ON CSR
          </p>
          <p className="text-[white] bg-black rounded-md px-2">Learn More</p>
        </div>
      </div>

      <div className="flex px-2 bg-[#242b764a] border-2 border-gray-700  rounded-md">
        <img className="w-[18px]" src={eye} alt="icon" />
        <p className="text-[white] text-[14px] pl-1">View All</p>
      </div>
    </div>
  );
};

export default ActivePair;
