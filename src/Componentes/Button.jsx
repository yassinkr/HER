import PropTypes from 'prop-types';

const Button = ({rounded , filled,text}) => {
    return (
        <button className={`w-full h-full font-medium  ${rounded ? 'rounded-[10px]' : ''} ${filled ? 'bg-herBrown text-white' : 'text-herBrown'}`}>
        {text}
      </button>
      
    );
};



Button.propTypes = {
    rounded: PropTypes.bool,
    filled: PropTypes.bool,
    text: PropTypes.string,
};
export default Button;