import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';  
const TypeEffect = ({text,isFinished }) => {
  const steps = text.length;
  const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          if (currentIndex < text.length) {
              setTypedText((prevText) => prevText + text[currentIndex]);
              setCurrentIndex((prevIndex) => prevIndex + 1);
              isFinished(false);
          } else {
              clearInterval(interval); // Stop the interval when all characters are typed
              isFinished(true); // Execute the isFinished function
              let typing= document.getElementsByTagName('h1');
              typing.style.setProperty('--displayed', 'none');
          }
      }, 150); // Adjust the delay here (e.g., increase for slower typing, decrease for faster typing)
  
      return () => {
          clearInterval(interval); // Clean up the interval when the component unmounts
      };
  }, [text, currentIndex,isFinished]);
  
  

  return (
    <div className='mx-5'>
       {steps && <h1 className="w-fit font-Bodoni text-[40px] sm:text-[64px] relative">
  {typedText}
</h1>}
</div>
  )
}




TypeEffect.propTypes = {
    text: PropTypes.string.isRequired,
    the_lines_before: PropTypes.number.isRequired,
    text_before: PropTypes.string.isRequired,
    bg_color: PropTypes.string.isRequired,  
    isFinished: PropTypes.func
};


export default TypeEffect