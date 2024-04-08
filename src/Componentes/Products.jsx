import Button from "./Button"
import Accordion from "./Accordion"
const Products = () => {
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
        <div className="flex w-full justify-between mt-24 mb-10">
        <div className="flex justify-start items-center"><h1 className="text-xl mr-5 font-bold">Mes Produits</h1> 
        <div className="w-24 h-7"> <Button filled={true} text={"Ajouter"} rounded={true}/> </div> </div>
        <div className="flex justify-start items-center">
            <input type="text" placeholder="Rechercher un produit" className="border-[1px] border-herBrown px-3 h-10"/>
           <div className="w-28 h-8 ml-5 "> <Button filled={false} text={"Rechercher"} rounded={true}/> </div>
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
                            <button className="">Edit</button><div className="w-[2px] h-[24px] bg-herBrown"></div>
                            <button className="text-herRed" >Delete</button></div>
                            </div>
                            <p className="w-full">{product.stock}</p>
                            <p className="w-full">{product.price}</p>
                            <p className="w-full">{product.Date}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col justify-center items-center lg:hiddentext-center">
            {products.map((product) => (
               <li key={product.id} className="w-full"> <Accordion product={product} /></li>
            ))}
            </ul>
        </div>
  )
}

export default Products