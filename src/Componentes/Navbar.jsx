import HamburgerMenu from "./Hamburger_Menu"
import PropTypes from 'prop-types'
const Navbar = ({margin_top}) => {
     
  return (
    <div className={`w-full flex justify-center items-center bg-white mt-${margin_top}`}>
    <div className="w-[90%] hidden lg:flex justify-between items-center ">
        <div className="hidden lg:flex">
            <ul className="flex justify-between items-center">
                <li className="p-5">VETEMENT</li>
                <li className="p-5">BEAUTE</li>
                <li className="p-5">ACCESOIRES</li>
            </ul>
        </div>
        <div> 
        <svg width="101" height="31" viewBox="0 0 101 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8 -2.38419e-06V0.159998H25.18V29.84H28.8V30H17.4V29.84H21.4V15.28H8.2V29.84H12.2V30H0.8V29.84H4.38V0.159998H0.8V-2.38419e-06H12.2V0.159998H8.2V15.12H21.4V0.159998H17.4V-2.38419e-06H28.8ZM40.3703 30V29.84H43.9503V0.159998H40.3703V-2.38419e-06H61.3903V8.2H61.2503C61.2503 6.77333 61.017 5.45333 60.5503 4.24C60.097 3.01333 59.377 2.02666 58.3903 1.28C57.4036 0.533331 56.1303 0.159998 54.5703 0.159998H47.7703V29.84H54.1703C55.997 29.84 57.457 29.46 58.5503 28.7C59.6436 27.9267 60.4303 26.8733 60.9103 25.54C61.4036 24.2067 61.6503 22.6933 61.6503 21H61.8103V30H40.3703ZM54.4503 18.88C54.4503 17.9867 54.2503 17.22 53.8503 16.58C53.4636 15.9267 52.9436 15.4267 52.2903 15.08C51.637 14.7333 50.9303 14.56 50.1703 14.56H46.2503V14.4H50.1703C50.9303 14.4 51.637 14.2467 52.2903 13.94C52.9436 13.62 53.4636 13.1533 53.8503 12.54C54.2503 11.9267 54.4503 11.1733 54.4503 10.28H54.6103V18.88H54.4503ZM81.0469 14.68V14.54H87.0469C88.3269 14.54 89.4135 14.2533 90.3069 13.68C91.2002 13.1067 91.8802 12.2867 92.3469 11.22C92.8135 10.1533 93.0469 8.89333 93.0469 7.44C93.0469 5.98667 92.8135 4.71333 92.3469 3.62C91.8802 2.52667 91.2002 1.68 90.3069 1.08C89.4135 0.466665 88.3269 0.159998 87.0469 0.159998H73.8469V-2.38419e-06H87.0469C89.0602 -2.38419e-06 90.8135 0.259998 92.3069 0.779998C93.8135 1.3 94.9802 2.10667 95.8069 3.2C96.6335 4.29333 97.0469 5.70667 97.0469 7.44C97.0469 9.17333 96.6602 10.5733 95.8869 11.64C95.1135 12.6933 93.9802 13.4667 92.4869 13.96C91.0069 14.44 89.1935 14.68 87.0469 14.68H81.0469ZM73.8469 30V29.84H86.4469V30H73.8469ZM78.2269 29.92V0.0999975H82.0469V29.92H78.2269ZM96.8469 30.2C95.6869 30.2 94.7802 29.9867 94.1269 29.56C93.4869 29.12 93.0202 28.5333 92.7269 27.8C92.4335 27.0533 92.2469 26.22 92.1669 25.3C92.1002 24.38 92.0602 23.4333 92.0469 22.46C92.0335 21.4733 91.9802 20.5267 91.8869 19.62C91.7935 18.7 91.5869 17.8733 91.2669 17.14C90.9469 16.3933 90.4335 15.8067 89.7269 15.38C89.0335 14.94 88.0735 14.72 86.8469 14.72H81.0469V14.6H87.6469C89.6069 14.6 91.1602 14.88 92.3069 15.44C93.4535 15.9867 94.3069 16.7133 94.8669 17.62C95.4402 18.5267 95.8202 19.5267 96.0069 20.62C96.2069 21.7133 96.3069 22.8067 96.3069 23.9C96.3202 24.98 96.3402 25.9733 96.3669 26.88C96.3935 27.7867 96.5335 28.52 96.7869 29.08C97.0402 29.64 97.5202 29.92 98.2269 29.92C98.6535 29.92 99.0469 29.8733 99.4069 29.78C99.7802 29.6867 100.107 29.5733 100.387 29.44L100.447 29.56C100.127 29.7333 99.6602 29.88 99.0469 30C98.4469 30.1333 97.7135 30.2 96.8469 30.2Z" fill="black"/>
</svg>
        </div>
        <div>
            <ul className="flex justify-between items-center">
                <li className="p-5">MAISON & DECO</li>
                <li className="p-5">PARFUM</li>
                <li className="p-5">
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2.67838C11.45 2.67838 12.625 4.00347 12.625 5.63869C12.625 7.27391 11.45 8.599 10 8.599C8.55 8.599 7.375 7.27391 7.375 5.63869C7.375 4.00347 8.55 2.67838 10 2.67838ZM10 15.3654C13.7125 15.3654 17.625 17.4236 17.625 18.3257V19.8764H2.375V18.3257C2.375 17.4236 6.2875 15.3654 10 15.3654ZM10 0C7.2375 0 5 2.52331 5 5.63869C5 8.75407 7.2375 11.2774 10 11.2774C12.7625 11.2774 15 8.75407 15 5.63869C15 2.52331 12.7625 0 10 0ZM10 12.6871C6.6625 12.6871 0 14.576 0 18.3257V22.5548H20V18.3257C20 14.576 13.3375 12.6871 10 12.6871Z" fill="black"/>
</svg>
                </li>
            </ul>
        </div>
    </div>
    <div className="w-full flex justify-center items-center lg:hidden ">
    <HamburgerMenu />
    </div>
    </div>
  )
}
Navbar.propTypes = {
    margin_top: PropTypes.number
}



export default Navbar