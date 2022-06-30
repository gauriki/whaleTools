import plus from "../images/plus.png";
import rat from "../images/rat.png";
import depo from "../images/depo.png";

const ListHere = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <p className="text-[white] text-[12px] font-semibold h-[20px] w-[149px]">
          LIST YOUR AD HERE
        </p>
        <img className="w-[15px] h-[15px] mr-2" src={plus} alt="icon" />
      </div>
      <div>
        <img className="w-[250px] h-auto" src={rat} alt="icon" />
        <img className="w-[250px] h-auto mt-2" src={depo} alt="icon" />
      </div>
    </div>
  );
};

export default ListHere;
