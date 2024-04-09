import  { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Accordion = ({ product}) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };
    const navigate = useNavigate()

    const handleClick = (navigate_to) => {
        navigate(navigate_to);}
    return (
        <div className={`    border-[1px]  mb-[10px] ${isActive ? ' bg-lightBeige' : ''}`}>
            <div className="w-full flex justify-between cursor-pointer p-5 bg-white " onClick={toggleAccordion}>
                <div>{product.name}</div>
                <div className={`${isActive ? 'rotate-180' : ''} flex justify-center items-center`}>
                <svg width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.51568 2.52546C3.43235 2.52546 3.35422 2.5189 3.2813 2.50577C3.20839 2.49286 3.14068 2.47077 3.07818 2.43952L0.187554 0.99421C0.072971 0.936918 0.0183876 0.865251 0.0238043 0.77921C0.0288043 0.693376 0.0885957 0.621814 0.203179 0.564522C0.317762 0.50723 0.463596 0.478584 0.640679 0.478584C0.817763 0.478584 0.963596 0.50723 1.07818 0.564522L3.51568 1.78327L5.9688 0.556709C6.08339 0.499418 6.22672 0.472022 6.3988 0.474522C6.57047 0.47723 6.7136 0.50723 6.82818 0.564522C6.94276 0.621814 7.00005 0.69473 7.00005 0.783272C7.00005 0.871814 6.94276 0.94473 6.82818 1.00202L3.95318 2.43952C3.89068 2.47077 3.82297 2.49286 3.75005 2.50577C3.67714 2.5189 3.59901 2.52546 3.51568 2.52546Z" fill="black"/>
</svg>
                </div>
            </div>
            {isActive && <div className="p-5 ">
            <div className=" w-full flex flex-col justify-around items-center h-48">
                           
                            <div className="w-full flex justify-between items-center font-bold">
                            <button className="" onClick={() => handleClick(`/Myprofile/products/Edit/${product.id}`)}>Edit</button>
                            <button className="text-herRed" >Delete</button></div>
                           
                           <div className="w-full flex justify-between items-center pb-5"> <p className='font-bold'>stock</p>   <p >{product.stock}</p></div>
                           <div className="w-full flex justify-between items-center pb-5"> <p className='font-bold'>Prix</p> <p >{product.price}</p></div>
                           <div className="w-full flex justify-between items-center pb-5"><p className='font-bold'>Date</p>   <p >{product.Date}</p></div>
                        </div>
                        </div>}
        </div>
    );
};                   


Accordion.propTypes={   
    product: PropTypes.object.isRequired,
    
}
export default Accordion;