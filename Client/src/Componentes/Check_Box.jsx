import  { useState } from "react";
import PropTypes from "prop-types";

const Check_Box = ({text}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
   
  <div className="inline-flex items-center ">
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on"
    data-ripple-dark="true">
    <input id="ripple-on" type="checkbox" onClick={handleCheckboxChange}
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-herBlack transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-herBrown checked:border-herBrown checked:before:bg-herBrown hover:before:opacity-10" />
    <span
      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      
    </span>
  </label>
  <label className="mt-px font-light text-herBlack cursor-pointer select-none" htmlFor="ripple-on">
    {text}
  </label>
</div>
  );
};


Check_Box.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Check_Box;
