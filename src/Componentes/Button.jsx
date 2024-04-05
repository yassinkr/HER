import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 
const Button = ({rounded , filled,text ,navigate_to , onClick}) => {
    const navigate = useNavigate()

    const handleClick = () => {
       if(navigate_to){ navigate(navigate_to);}
         else{onClick();}
    }
    
    return (
        <button className={`w-full h-full font-medium  ${rounded ? 'rounded-[10px]' : ''} ${filled ? 'bg-herBrown text-white' : 'text-herBrown'}`} onClick={handleClick}>
        {text}
      </button>
      
    );
};



Button.propTypes = {
    rounded: PropTypes.bool,
    filled: PropTypes.bool,
    text: PropTypes.string,
    navigate_to: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;