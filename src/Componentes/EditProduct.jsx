import { useState } from "react"
import Button from "./Button";
import Check_Box from "./Check_Box";    
const EditProduct = () => {
    const [general,setGeneral]=useState(true);
    const [promo,setPromo]=useState(false);
    const [stock_inf , setStock_inf]=useState(false);
    const [detailes , setDetailes]=useState(false);

    
    const handleGeneral =()=>{
        setGeneral(true);
        setPromo(false);
        setStock_inf(false);
        setDetailes(false);
    }

    const handlePromo =()=>{
        setGeneral(false);
        setPromo(true);
        setStock_inf(false);
        setDetailes(false);
    }
    const handleStock_inf =()=>{
        setGeneral(false);
        setPromo(false);
        setStock_inf(true);
        setDetailes(false);
    }
    const handleDetailes =()=>{
        setGeneral(false);
        setPromo(false);
        setStock_inf(false);
        setDetailes(true);
    }
 
  return (
    <div className="w-full h-screen flex flex-col-reverse lg:flex-row-reverse justify-center pt-10 lg:pt-48 font-Bodoni px-5">
        <div className="w-full lg:w-[30%] h-fit">
            <div className="w-full h-[200px] border-[1px] border-herBrown">
            <h1 className="text-herBlack text-lg font-bold pl-5 py-3 w-full h-fit border-b-[1px] border-herBrown">image du produit</h1>
            </div>
            <div className="w-full h-fit border-[1px] border-herBrown my-5">
            <h1 className="text-herBlack text-lg font-bold pl-5 py-3 w-full h-fit border-b-[1px] border-herBrown">catégorie du produit </h1>
            <div className="w-full flex flex-col justify-center items-center mb-3">
                    <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Vêtement'}/>
                     <Check_Box text={'Parfum'}/>
                     </div>
                     <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Accesoires'}/>
                     <Check_Box text={'Beauté'}/>
                     </div>
                     <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Maison & déco'}/>
                     </div>
                </div>
            </div>
            <div className="h-10"><Button rounded={false} filled={true} text={"Sauvgarder"}/></div>
        </div>
    <div className="w-full  max-h-[400px] h-full flex flex-col justify-center items-start border-[1px] border-herBrown py-5 my-5 lg:my-0 lg:mr-5">
        <h1 className="text-herBlack text-xl font-bold pt-3 pb-5 px-5 w-full h-[30%]">Modifier Produit</h1>
    <div className="w-full flex h-full border-t-[1px] border-herBrown flex-col md:flex-row">
        <ul className="shrink-0  flex flex-row md:flex-col   text-md ">
            <li onClick={()=>handleGeneral()} className={`w-full p-3 cursor-pointer ${general ? " bg-herBrown bg-opacity-[20%]": ""}`}>Général</li>
            <li onClick={()=>handlePromo()} className={`w-full p-3 cursor-pointer ${promo ? " bg-herBrown bg-opacity-[20%]": ""}`}>Promo</li>
            <li onClick={()=>handleStock_inf()} className={`w-full p-3 cursor-pointer ${stock_inf ? " bg-herBrown bg-opacity-[20%]": ""}`}>Information de Stock</li>
            <li onClick={()=>handleDetailes()} className={`w-full p-3 cursor-pointer ${detailes ? " bg-herBrown bg-opacity-[20%]": ""}`}>Détailes</li>
        </ul>
        {general && <div className="w-full flex flex-col px-5 pt-5">
            <div className="w-full lg:w-[60%] flex  justify-between items-center mb-5">
            <label htmlFor="prodName" className="mb-2 text-herBlack text-[16px] ">Nom de produit</label>
                <input type="text" className="border-[1px] border-black p-2 w-[70%]"/>
               
            </div>
            <div className="w-full lg:w-[60%] flex  justify-between items-center mb-5">
            <label htmlFor="prodPrice" className="mb-2 text-herBlack text-[16px] ">prix</label>
                <input type="text" className="border-[1px] border-black p-2 w-[70%]"/>
               
            </div>
            </div>}
        {promo && <div className="w-full flex flex-col px-5 pt-5">
            <div className="w-full lg:w-[60%] flex  justify-between items-center mb-5">
            <label htmlFor="prodName" className="mb-2 text-herBlack text-[16px] ">Nouveau prix</label>
                <input type="text" className="border-[1px] border-black p-2 w-[70%]"/>
               
            </div></div>}
        {stock_inf && <div className="w-full flex flex-col px-5 pt-5">
            <div className="w-full  flex  justify-between items-center mb-5 pr-5">
            <div className=" w-[50%] flex  justify-between items-center"><p>EN Stock</p> <p>OUI /NON</p></div> <button className="text-herRed underline">Mettre en rupture</button>
            </div></div>}
        {detailes && <div className=" w-full flex flex-col p-5 lg:p-10">
            <label htmlFor="detailes" className="mb-3"> Ajouter description du produit</label>
            <textarea className="border-[1px] border-herBrown h-[60%]"></textarea>
            </div>}
    </div>
    </div>
    </div>
  )
}

export default EditProduct