import PropTypes from 'prop-types';
import	{ useNavigate } from 'react-router-dom';
const SideBar = ({firstName, LastName }) => {
    const navigate = useNavigate()
    const handleClick = (navigate_to) => {
        navigate(navigate_to);} 
  return (
    <div className=' fixed left-0 top-0 text-white text-center text-lg font-Bodoni bg-herDarkBrown w-fit h-full py-10 flex flex-col justify-start items-center'>
        <div className=" mx-5 pt-5 pb-20 w-16"><div className='flex justify-center items-center'><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect x="0.5" width="40" height="40" fill="url(#pattern0_558_162)"/>
<defs>
<pattern id="pattern0_558_162" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_558_162" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_558_162" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC50lEQVR4nO2ZzWoUQRDHh6goekmMRkOihpxykwgJ6kFfIaCSYIJ3nyDGkwdNBONKMBLFR1g/0KgXfQlXvSl+nrLGWzQrmJ8UlLAMs2tVT4+uuD8YGGZm/101U91VXZskbdq0yQ2wCTgCnAfuAq+AL8B3PeT8pd6TZw4DHa1g+D7gMvAJPx+BOaD/bxi+G7gF1MhPDVgCdv0p408Dq8TnMzBRpOFbgNsUz00ZK7bx24EnDiPWgAfAVaCk53LNymMZM+abtxq/AcwDnRk6neqMPGPhUZQv4QgbMWzSoDflcGIpr/GT2Jl36F5z6I7nWSqtq81aVtg00e4Cvhq1q0B3iAOyzlt5GKAvMW7lhle835mkrgQ4ICuUFbFlv0dcygOKiP9AB4Q5T2HmrW2KDiHhg6kA1KrSi3cS73RM4npGLeJS7oZQcjiwEDjGOYu41OwhSHKaMuifcSSyNGWLA7LxCGVDy4WuBmGzkMN4oWJxIEapLPG9rM6U9Dwk5tNULQ7E2KQUxfp/4cAqrUu16ElcNBWLA/doXcoWB2YChL8BT4GLwAngKDAI7NBjUK+dBC4BzySe8TNtcUCaThZqmvTGQvavus8e0y8uzS8LIxbhDm06NeKH7hUOeI1uMuaAbl1FuxHvzd087ZhlIVXqsViGpwGON6mEZ5OcGxpZXoeSggGGMpZymS99XiFp96Un6nBhlivAIR2rnuuJF+lVaruvntfAHreYfcy9wJvUmCtSCIYKTmTE4gugpwDjexok0VN5haVXmeYtcDCi8cPAu4xxFmOIyx75foa4xOkFYGvOtuV0Rsyje+bNuR2oSzrScM1CYvasJ5lpdpbfpOP9F8vRmrupt5VemdIb+7IaJtm8F9imR69ek3t3ftOpXoz25hs4Mq7tvtis5J6wDie6pd0XWJClWZd1PnipzOlIn5Yd0nTyIr+ZdWfYghyRAnBU+jY6DypaDtT0kPPnek9WnZGW+Ju1TZvk3+cnb4+A4RfGMO0AAAAASUVORK5CYII="/>
</defs>
</svg>
</div>
 <p >{firstName}<br></br>{LastName}</p>
</div>
       
        <ul className='h-72 flex flex-col justify-between items-center'>
          
           <li className="flex flex-col justify-center items-center mx-3 cursor-pointer" onClick={()=>handleClick("/")}>
            <div><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.4 18V11.6471H12.6V18H17.85V9.52941H21L10.5 0L0 9.52941H3.15V18H8.4Z" fill="white"/>
</svg></div>
<p>Home</p></li>
           <li className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>handleClick("/Myprofile/products/Liste")}>
            <div><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="25" height="25" fill="url(#pattern0_558_168)"/>
<defs>
<pattern id="pattern0_558_168" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_558_168" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_558_168" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVR4nO3TQQoCMRBE0T6Irj2LeFLdeCd1KeJ4gS+DLoXJRJxu4b91CF2pToQklQLsgAudGu7vdQa2LQHGgxQMMDq1BPhK9v1hgAk2MMUVyl4hSS+/+mSLfV4M8JkNtKKYmItiwgDJwgaShQ0kCxtIFjaQLGwgWdjAHzbwoI57T4Ajdex7AmyAW/bkwBVYzQ7wDrEGDsCQMPgwvnz38JIUS3gC5tbg8uc3CIMAAAAASUVORK5CYII="/>
</defs>
</svg></div><p>Products</p></li>
           <li className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>handleClick("/")}>
            <div><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="25" height="25" fill="url(#pattern0_558_171)"/>
<defs>
<pattern id="pattern0_558_171" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_558_171" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_558_171" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO2YTStEURjHz2ShyEKyM1lIWBElC1ubsWZt4QtQ8x1E+QpsZ4iVz0Czs9UkWcrbkPLaT1eP0s2dO+49r7m/Otvn/H/3dF6eq1RBQcEXwAe/8wwMKt8B3kmmqnwHeGsjcAF0KZ8BXmlPRYUEsIsfNIGFLAKz+EMz6yo08IOzrAIr+MFaVoFu4Mpx+PMoRyYBkdh0LLCUObwIDKdcciY5AUq5BETiyJHAfO7wIlBxEL6uJbwIlKKjzGL4F2BUm4BIVC0KbGsNLwL9wJOF8LfAgHYBkdixILBuJLwITHt9aXnwPlpWpgFWDYU/1nJpdSCwZyB8C5iwEX5Rc/A74AAYtxG+RzbZTxre98rfABux8NFPgEkVAkAf8BgT2FKhAMzEwl8CvSoUgBEsowxInIYuMGfpMWdGQCSmpDu7J0SBAtcAZWAfeJBxCIz5Uq+TyW4SOqiy63qpyJfS9gdBd71UZImTaLmul3fCe9f1UpENlkTNdb1UotNBNlica2DIdb2/nBx1aQGjUcszGZrrFRT8Rz4BogelNNVmi6kAAAAASUVORK5CYII="/>
</defs>
</svg>
</div><p>Orders</p></li>
           <li className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>handleClick("/")}>
            <div><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75058 13H5.24942C5.08267 13 4.93816 12.9458 4.81588 12.8375C4.6936 12.7292 4.62135 12.5938 4.59911 12.4312L4.39902 10.92C4.25451 10.8658 4.11844 10.8008 3.99083 10.725C3.86277 10.6492 3.7376 10.5679 3.61532 10.4812L2.16465 11.0662C2.00902 11.1204 1.85339 11.1258 1.69776 11.0825C1.54213 11.0392 1.41985 10.9471 1.33092 10.8062L0.0970149 8.71C0.00808457 8.56917 -0.0197062 8.4175 0.0136427 8.255C0.0469916 8.0925 0.130364 7.9625 0.263759 7.865L1.51434 6.93875C1.50323 6.86292 1.49767 6.78968 1.49767 6.71905V6.2803C1.49767 6.2101 1.50323 6.13708 1.51434 6.06125L0.263759 5.135C0.130364 5.0375 0.0469916 4.9075 0.0136427 4.745C-0.0197062 4.5825 0.00808457 4.43083 0.0970149 4.29L1.33092 2.19375C1.40874 2.04208 1.52813 1.94718 1.68909 1.90905C1.8505 1.87135 2.00902 1.87958 2.16465 1.93375L3.61532 2.51875C3.7376 2.43208 3.86544 2.35083 3.99883 2.275C4.13223 2.19917 4.26562 2.13417 4.39902 2.08L4.59911 0.56875C4.62135 0.40625 4.6936 0.270833 4.81588 0.1625C4.93816 0.0541667 5.08267 0 5.24942 0H7.75058C7.91733 0 8.06184 0.0541667 8.18412 0.1625C8.3064 0.270833 8.37865 0.40625 8.40089 0.56875L8.60098 2.08C8.74549 2.13417 8.88178 2.19917 9.00984 2.275C9.13745 2.35083 9.2624 2.43208 9.38468 2.51875L10.8354 1.93375C10.991 1.87958 11.1466 1.87417 11.3022 1.9175C11.4579 1.96083 11.5801 2.05292 11.6691 2.19375L12.903 4.29C12.9919 4.43083 13.0197 4.5825 12.9864 4.745C12.953 4.9075 12.8696 5.0375 12.7362 5.135L11.4857 6.06125C11.4968 6.13708 11.5023 6.2101 11.5023 6.2803V6.71905C11.5023 6.78968 11.4912 6.86292 11.469 6.93875L12.7196 7.865C12.853 7.9625 12.9363 8.0925 12.9697 8.255C13.003 8.4175 12.9752 8.56917 12.8863 8.71L11.6524 10.79C11.5635 10.9308 11.4385 11.0257 11.2776 11.0747C11.1162 11.1232 10.9576 11.1204 10.802 11.0662L9.38468 10.4812C9.2624 10.5679 9.13456 10.6492 9.00117 10.725C8.86777 10.8008 8.73438 10.8658 8.60098 10.92L8.40089 12.4312C8.37865 12.5938 8.3064 12.7292 8.18412 12.8375C8.06184 12.9458 7.91733 13 7.75058 13ZM6.53335 8.775C7.17809 8.775 7.72835 8.55292 8.18412 8.10875C8.63989 7.66458 8.86777 7.12833 8.86777 6.5C8.86777 5.87167 8.63989 5.33542 8.18412 4.89125C7.72835 4.44708 7.17809 4.225 6.53335 4.225C5.87749 4.225 5.32434 4.44708 4.87391 4.89125C4.42392 5.33542 4.19893 5.87167 4.19893 6.5C4.19893 7.12833 4.42392 7.66458 4.87391 8.10875C5.32434 8.55292 5.87749 8.775 6.53335 8.775Z" fill="white"/>
</svg></div><p>Sittings</p></li> 
        </ul>
    </div>
  )
}
SideBar.propTypes = {
    firstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
   
};

export default SideBar