import Navbar from "./Navbar"
import TypeEffect from "./TypeEffect"
import Button from "./Button"
import {useState} from 'react'
const Landing_page = () => {
    const [finished,setFinished]=useState(false);
    const HandleFinished =(currentState)=>{
    setFinished(currentState);
    }
  return (
    <div className="bg-lightBeige flex flex-col justify-center items-center font-Bodoni ">
        <div className="bg-herPurple w-full text-center"> <p>something here something here something here something here</p></div>
        <Navbar  />
        <div className="w-full bg-herPurple flex justify-center items-center">
        <div className=" w-[90%] py-4 ">
        <svg width="258" height="112" viewBox="0 0 258 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.456 -7.62939e-06V0.255997H85.872V95.744H97.456V96H54.576V95.744H66.032V48.768H31.472V95.744H43.056V96H0.112V95.744H11.632V0.255997H0.112V-7.62939e-06H43.056V0.255997H31.472V48.512H66.032V0.255997H54.576V-7.62939e-06H97.456ZM135.596 97.28C129.537 97.28 124.14 96.1067 119.404 93.76C114.668 91.3707 110.935 87.8933 108.204 83.328C105.473 78.7627 104.108 73.1733 104.108 66.56C104.108 59.9467 105.431 54.3573 108.076 49.792C110.764 45.2267 114.433 41.7707 119.084 39.424C123.777 37.0347 129.153 35.84 135.212 35.84C141.569 35.84 146.817 37.12 150.956 39.68C155.095 42.1973 158.188 45.504 160.236 49.6C162.284 53.696 163.308 58.0693 163.308 62.72H112.684V62.464H144.236C144.236 59.6053 144.129 56.6613 143.916 53.632C143.745 50.56 143.361 47.7013 142.764 45.056C142.167 42.368 141.249 40.2133 140.012 38.592C138.817 36.928 137.217 36.096 135.212 36.096C132.993 36.096 131.159 36.928 129.708 38.592C128.257 40.2133 127.105 42.432 126.252 45.248C125.441 48.0213 124.865 51.136 124.524 54.592C124.183 58.048 124.012 61.6107 124.012 65.28C124.012 69.376 124.204 73.3013 124.588 77.056C125.015 80.8107 125.761 84.1387 126.828 87.04C127.895 89.9413 129.388 92.2453 131.308 93.952C133.228 95.616 135.681 96.448 138.668 96.448C144.812 96.448 150.039 94.6773 154.348 91.136C158.657 87.552 161.601 83.072 163.18 77.696H163.436C161.772 83.2427 158.657 87.8933 154.092 91.648C149.527 95.4027 143.361 97.28 135.596 97.28ZM196.297 67.776C196.297 63.3387 196.553 59.2 197.065 55.36C197.62 51.52 198.537 48.1493 199.817 45.248C201.14 42.304 202.932 40 205.193 38.336C207.454 36.672 210.334 35.84 213.833 35.84C216.734 35.84 219.209 36.5013 221.257 37.824C223.305 39.1467 224.862 40.8533 225.929 42.944C227.038 44.992 227.593 47.168 227.593 49.472C227.593 52.416 226.612 54.976 224.649 57.152C222.729 59.328 220.169 60.416 216.969 60.416C213.769 60.416 211.166 59.4347 209.161 57.472C207.198 55.5093 206.217 53.1627 206.217 50.432C206.217 47.2747 207.22 44.7147 209.225 42.752C211.273 40.7467 213.812 39.744 216.841 39.744C218.889 39.744 220.724 40.2133 222.345 41.152C223.966 42.048 225.225 43.2427 226.121 44.736C227.06 46.1867 227.529 47.7653 227.529 49.472H227.337C227.337 47.2107 226.804 45.0773 225.737 43.072C224.67 41.024 223.134 39.36 221.129 38.08C219.124 36.7573 216.692 36.096 213.833 36.096C210.377 36.096 207.518 36.928 205.257 38.592C203.038 40.256 201.289 42.56 200.009 45.504C198.729 48.448 197.833 51.84 197.321 55.68C196.809 59.4773 196.553 63.5093 196.553 67.776H196.297ZM196.553 37.12V95.744H205.961V96H170.313V95.744H178.633V37.376H170.313V37.12H196.553ZM257.523 95.232C257.523 101.461 255.134 105.984 250.355 108.8C246.942 110.848 244.126 111.872 241.907 111.872C241.224 111.872 240.883 111.616 240.883 111.104C240.883 110.592 241.31 110.251 242.163 110.08C249.331 108.373 252.915 104.704 252.915 99.072C252.915 95.5733 251.976 93.2267 250.099 92.032C250.099 95.1893 248.52 96.768 245.363 96.768C243.742 96.768 242.334 96.2133 241.139 95.104C240.03 93.9093 239.475 92.4587 239.475 90.752C239.475 88.5333 240.2 86.7413 241.651 85.376C243.102 83.9253 244.936 83.2 247.155 83.2C250.227 83.2 252.702 84.352 254.579 86.656C256.542 88.8747 257.523 91.7333 257.523 95.232Z" fill="black"/>
</svg>  
        <TypeEffect text='Achetez et vendez en' the_lines_before={0} text_before="" bg_color="herPurple" isFinished={HandleFinished}/>
       {finished && <TypeEffect text='toute simplicité' the_lines_before={0} text_before="" bg_color="herPurple"/>  }    
        </div>
        </div>
        <div className="w-full h-[300px] bg-herBeige">
            <ul className="w-full h-full flex flex-col text-[32px] sm:text-[40px] text-center lg:flex-row">
                <il className="w-full h-full flex justify-center items-center border-[1px] border-herBlack"><h1>NOUVEAUTÉ</h1></il>
                <il className="w-full h-full flex justify-center items-center border-[1px] border-herBlack"><h1>DESTOCKAGE</h1></il>
                <il className="w-full h-full flex justify-center items-center border-[1px] border-herBlack"><h1>RECOMMENDÉ</h1></il>
            </ul>
        </div>
        <div className="bg-lightBeige w-full h-[200px] relative flex justify-center items-center text-center font-bold text-xl sm:text-2xl">
       
        <svg width="452" height="115" viewBox="0 0 388 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M114.55 0.499991V0.799996H100.975V112.7H114.55V113H64.3V112.7H77.725V57.65H37.225V112.7H50.8V113H0.475V112.7H13.975V0.799996H0.475V0.499991H50.8V0.799996H37.225V57.35H77.725V0.799996H64.3V0.499991H114.55ZM219.245 114.5C212.145 114.5 205.82 113.125 200.27 110.375C194.72 107.575 190.345 103.5 187.145 98.15C183.945 92.8 182.345 86.25 182.345 78.5C182.345 70.75 183.895 64.2 186.995 58.85C190.145 53.5 194.445 49.45 199.895 46.7C205.395 43.9 211.695 42.5 218.795 42.5C226.245 42.5 232.395 44 237.245 47C242.095 49.95 245.72 53.825 248.12 58.625C250.52 63.425 251.72 68.55 251.72 74H192.395V73.7H229.37C229.37 70.35 229.245 66.9 228.995 63.35C228.795 59.75 228.345 56.4 227.645 53.3C226.945 50.15 225.87 47.625 224.42 45.725C223.02 43.775 221.145 42.8 218.795 42.8C216.195 42.8 214.045 43.775 212.345 45.725C210.645 47.625 209.295 50.225 208.295 53.525C207.345 56.775 206.67 60.425 206.27 64.475C205.87 68.525 205.67 72.7 205.67 77C205.67 81.8 205.895 86.4 206.345 90.8C206.845 95.2 207.72 99.1 208.97 102.5C210.22 105.9 211.97 108.6 214.22 110.6C216.47 112.55 219.345 113.525 222.845 113.525C230.045 113.525 236.17 111.45 241.22 107.3C246.27 103.1 249.72 97.85 251.57 91.55H251.87C249.92 98.05 246.27 103.5 240.92 107.9C235.57 112.3 228.345 114.5 219.245 114.5ZM350.379 79.925C350.379 74.725 350.679 69.875 351.279 65.375C351.929 60.875 353.004 56.925 354.504 53.525C356.054 50.075 358.154 47.375 360.804 45.425C363.454 43.475 366.829 42.5 370.929 42.5C374.329 42.5 377.229 43.275 379.629 44.825C382.029 46.375 383.854 48.375 385.104 50.825C386.404 53.225 387.054 55.775 387.054 58.475C387.054 61.925 385.904 64.925 383.604 67.475C381.354 70.025 378.354 71.3 374.604 71.3C370.854 71.3 367.804 70.15 365.454 67.85C363.154 65.55 362.004 62.8 362.004 59.6C362.004 55.9 363.179 52.9 365.529 50.6C367.929 48.25 370.904 47.075 374.454 47.075C376.854 47.075 379.004 47.625 380.904 48.725C382.804 49.775 384.279 51.175 385.329 52.925C386.429 54.625 386.979 56.475 386.979 58.475H386.754C386.754 55.825 386.129 53.325 384.879 50.975C383.629 48.575 381.829 46.625 379.479 45.125C377.129 43.575 374.279 42.8 370.929 42.8C366.879 42.8 363.529 43.775 360.879 45.725C358.279 47.675 356.229 50.375 354.729 53.825C353.229 57.275 352.179 61.25 351.579 65.75C350.979 70.2 350.679 74.925 350.679 79.925H350.379ZM350.679 44V112.7H361.704V113H319.929V112.7H329.679V44.3H319.929V44H350.679Z" fill="#E2D8E8" fillOpacity="0.5"/>
</svg>

            <div className="absolute w-full h-full flex justify-center items-end z-1">
                <h1 className="z-0 tracking-[7.5px] m-10 ">Explorez Notre Monde de Produits</h1>
            </div>
        </div>

     <div className="bg-lightBeige my-10">             
        <ul className="flex justify-center items-center text-center text-3xl flex-wrap">
            <il className=" m-5"> <img src="/images/VETEMENT.png"></img> <p className="pt-5">Vetement </p></il>
            <il className=" m-5"> <img src="/images/BEAUTE.png"></img> <p className="pt-5">Beauté</p></il>
            <il className=" m-5"> <img src="/images/PARFUM.png"></img> <p className="pt-5">Parfum</p></il>
            <il className=" m-5"> <img src="/images/MAISON & DECO.png"></img> <p className="pt-5">Maison & deco</p></il>
            <il className=" m-5"> <img src="/images/ACCESOIRES.png"></img> <p className="pt-5">Accessoires</p></il>
        </ul>
     </div>
     <div className="w-[60%] h-[100px]flex justify-start items-center text-[40px] sm:text-[64px] py-10 ">
        <p>Rejoignez-nous et vendez <br></br>vos articles </p>
     </div>
     <div className="w-[60%] my-24">
     <div className=" w-full flex justify-center lg:justify-start items-center pb-5">
        <div className="flex justify-center items-start">
            <h1 className=" text-herBrown text-[96px] sm:text-[128px] leading-[1em] mr-5">01</h1>
            <div ><p className="text-[32px] sm:text-[40px]">S&apos;inscrire au <br></br>HER </p> 
             <div className="w-full h-12"><Button text="S'inscrire" rounded={false} filled={true} navigate_to={"/Signup"}/></div>
             </div>
        </div>
     </div>
     <div className=" w-full flex justify-center lg:justify-end items-center pb-5">
        <div className="flex justify-center items-start">
            <h1 className=" text-herBrown text-[96px] sm:text-[128px] leading-[1em] mr-5">02</h1>
            <div ><p className="text-[32px] sm:text-[40px]">Ajoutez vos <br></br> Article</p> 
             </div>
        </div>
     </div>
     <div className=" w-full flex justify-center lg:justify-start items-center ">
        <div className="flex justify-center items-start">
            <h1 className=" text-herBrown text-[96px] sm:text-[128px] leading-[1em] mr-5">03</h1>
            <div ><p className="text-[32px] sm:text-[40px]">Recevez vos <br></br>commandes </p> 

             </div>
        </div>
     </div>
    </div>
    <div className="w-full h-[220px] bg-herBrown text-white text-xl sm:text-2xl">
        <ul className="flex flex-col w-full h-full justify-start items-center">
            <il className="w-full h-full flex items-center border-b-[1px] border-white px-5"> <p>Accueil -&gt;</p></il>
            <il className="w-full h-full flex items-center border-b-[1px] border-white px-5"><p>Contactez nous -&gt;</p></il>
            <il className="w-full h-full flex justify-between items-center px-5"><p>Follow us -&gt;</p>
            <div className="max-w-[200px] w-full flex justify-between items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_496_250)"/>
<defs>
<pattern id="pattern0_496_250" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_496_250" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_496_250" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2Y3U5TQRDHmxrlwsYXEG6gsb4NRAum4RXAG75eQdC30JhWIXph8A34uCp3QioPQdubEsnPTDLocT20u3vOnqXJ+ScnOdkzOzP/dmZ2ZyqVEiVKlJgaAI+AV8BH4BwYkh1D1SU6V8RGKOdfApeEx0/gRZ6OPwDeUTzeAtU8CMRw/ha7eYRNUfgGPAVmgcPE+lKWhC0i5m8xm7A992cVel6JrdWGe0BAsOxDQMpakTjU8BHnvxvfPvgQuPBwYgS0gRbQAB7r09C1jsq44tyHQN/RyD4wb6F3AThw1N33IWCLX8CGh/5N4MbWSEgCzs4nbGzHJrCfsm8GeA2c6D1nqO/r8i1F/kssAiMz5vUgOhuzpysyxp66TWKHINBO+eXHOZ8k8c8/AXyKQaBlyEvY2GLN2Lsag8AzQ/7UgcCxsbcRg0DNkB84EBgYe2vTRuDK2PskBoGpD6GWIS91fqqSuJNSRqVETkLXvN8Dn2MQkMNnIeUg63ocZNcxCAgO7ujk1iTONbHlOdK1/zor4KuNoVAEBJvOyv/a2LE1EpKAXIm3PG+iNyEJuDY0cqusW+it24ZN1obGp6W81ouZlMXnesLW9H1Vq83EhM2rpSy6qR+H9z4EZNB6X9D0IfBQh0qxcek9sZYpcWzvgUUv5xMkZEocC28yOa8EqsBeBOd3cxmvJ4gsFZQTvcxhMyGxl2VWCfxwbGLuwkB1ic6m2AjifIkSJUpUQuA3qbKgajsVYB8AAAAASUVORK5CYII="/>
</defs>
</svg>

            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_496_249)"/>
<defs>
<pattern id="pattern0_496_249" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_496_249" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_496_249" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO2YzUtUURjGp9SUVkqF0gfkoo2LghZRIMRAK9tUREbhfxAtWoi2yFVMu6ZETFxbkEWMYBuxZa2NahmhLcSPFi3EK9EvDhzh4sw477nvOXcucR84MHDvfd73NzP3nOecQiFXrlxqAS3AJeAh8Bb4CvwCduwwn7/Ya+aei8DBLDR+CngC/MRdK0AJONmMxo8BU0CEXhEwCRxNq/k7wCb+tQHcDtl4GzBNeL0wtXw3fxh4T3qaNzV9fvNpNr+rBeCQD4A0/jb1NKlt/i56/QEqwH1gwK4Bl4ErwHWg3OD5Qc1UqZ1tPgFnGtQpNvBYB44kATDzvEYfgXZBnaLAayLJCqtZpEx86BXWKgr8tp1WbBsPNHrlUKso9Cy5BLMk2SauoTrevcCiDXe747fQc1kUAG2q1KqvjvcHpe8FCYCJu1pVBTPgOPBX6TsiATCZXauqLAP0e/CdlQCYjYdWLTV8zSKm1WcJwGYggKsefNclAFGGAbZDAJwGuuJjn1TbVWPcc6gVSQDM3Oyizoam+9crOdTaCPESawHeOdRa8m3oA+CbQ603EsPRtACAVsd3bjhElDC/2Os9oyqzAOdr3DcXIkocsMEpa9PoiuktxMyQFsBjUfOxDc1OhgAi4IQYwBYczxBA2an52KZ+LQMAa4nPTYFbGQC4maj5WOHnTQQoq5qPhbC5JgBUvB3yAh2OEFqAiuRMyRXCnFY8SwGgXOt5nyA3gNUAAKvAtWCN72nGbESeAlseALaslyrVJgXpAR4BPxIAfAfGgO5CFgScAx4AL+ukUZNyZ+w9Z5vTZa5c/5/+ASEvIDzj+tbDAAAAAElFTkSuQmCC"/>
</defs>
</svg>

<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_496_248)"/>
<defs>
<pattern id="pattern0_496_248" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_496_248" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_496_248" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO2ZO04DMRBATREakgOEQ0BEQZSSDrgDfVAouUhAFNwgFwGi8Ck5QABRw6YIBXrIkiMha7Uhs3h3rPhJW63G4zeedTFrTCKRSKgG2ATOgDEwIzwz4A4Y2NxlN78NPFEfj0C7TOXr3PyCB6AhEbBto4VTiYDteS3cSgQy9PApEVCFSQJCck72/T/WWUpAgfPYBTaA62gFFgAnwHO0AqvmMUlASE7Fd6I+AeAbGAEHQEuTwBwYAl1gq0BAhAks8Ars5sXHIDD3Nx+bwLAoPgaBfS/u2LVUNAJNL+6lKHFsAlPvXUujQNeLO3ISU+DQe9fTKHCxwppXWq/Rzh/W2wO+NArgbp3Oks2/UQITWABX3UvX50339FzbiCtfpUBQzDoKZOjhYy1HiwP00JeO1+18vm4movG6k2i7+Xxd3It/cPySaNj5PHBT0YeduVx9ceUTiUTCVMUPcZTkbMI/460AAAAASUVORK5CYII="/>
</defs>
</svg>
                </div></il>
        </ul>
    </div>
    </div>
  )
}

export default Landing_page