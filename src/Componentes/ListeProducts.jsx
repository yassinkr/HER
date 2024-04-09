import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Accordion from './Accordion'
const ListeProducts = () => {
    const navigate = useNavigate()


    const handleClick = (navigate_to) => {
        navigate(navigate_to);}
    const products=[
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "This is a product 1",
            stock: "Disponible",
            Date: "2021-10-10"  
            },
            {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "This is a product 2",
            stock: "none Disponible",
            Date: "2021-10-10"  
        }
    ]
  return (
    <div className="w-[90%] flex flex-col  ml-5 font-Bodoni">
        <div className="flex flex-col-reverse lg:flex-row w-full  justify-between mt-24 mb-10 h-28">
        <div className="w-full lg:w-fit flex  justify-between lg:justify-center items-center"><h1 className="text-xl mr-5 font-bold">Mes Produits</h1> 
        <div className="w-24 h-7"> <Button filled={true} text={"Ajouter"} rounded={true}/> </div> </div>
        <div className="w-full lg:w-fit flex  justify-between lg:justify-center items-center">
            <input type="text" placeholder="Rechercher un produit" className="border-[1px] border-herBrown px-3 h-10 w-full rounded-full lg:rounded-nonelg:w-48 "/>
           <div className="w-28 lg:w-32 h-8 lg:ml-5 hidden lg:flex"> <Button filled={false} text={"Rechercher"} rounded={true}/> </div>
        </div>
        </div>
            <ul className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center text-center ">
                <li className=" w-full flex justify-around items-center border-[1px] border-herBrown h-12">
                    <h3>Nom</h3>
                    <p>stock</p>  
                    <p>Prix</p>
                    <p>Date</p>  
                </li>
                {products.map((product) => (
                    <li key={product.id} className={`w-full border-[1px] border-herBrown border-t-0 h-20  flex justify-center ${product.id  % 2 === 0 ? "bg-transparent":"bg-white"}`}>
                        <div className=" w-full flex justify-around items-center">
                            <div className="w-full flex flex-col justify-between items-center h-[80%]">{product.name}
                            <div className="w-24 flex justify-between items-center ">
                            <button onClick={() => handleClick(`/Myprofile/products/Edit/${product.id}`)}>Edit</button><div className="w-[2px] h-[24px] bg-herBrown"></div>
                            <button className="text-herRed" >Delete</button></div>
                            </div>
                            <p className="w-full">{product.stock}</p>
                            <p className="w-full">{product.price}</p>
                            <p className="w-full">{product.Date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col justify-center items-center lg:hidden text-center">
            {products.map((product) => (
               <li key={product.id} className="w-full"> <Accordion product={product} /></li>
            ))}
            </ul>
        </div>
  )
}

export default ListeProducts