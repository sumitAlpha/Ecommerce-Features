import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import {useSelector} from "react-redux";

const Cart = () => {
const{cart}=useSelector((state)=> state);
  console.log("Printing Cart");
  console.log(cart);
  const[totalAmount,SetTotalAmount]=useState(0);

 
  useEffect( () => {
    SetTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

    return (
      <div className="">
      {
        cart.length > 0  ? 
        (<div className="flex justify-between gap-14 max-w-[750px] mx-auto ">

          <div>
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              } )
            }
          </div>
         
    
          <div className="flex flex-col relative ">
    
            <div className="mt-8 ">
              <div className="text-green-800 uppercase text-2xl font-medium tracking-tight">Your Cart</div>
              <div className="text-green-800 uppercase text-3xl font-extrabold tracking-wider">Summary</div>
              <p className="mt-4">
                <span className="text-2xl font-medium">Total Items:{cart.length}</span>
              </p>
            </div>
            {
              cart.length>1 &&


              <div className="absolute bottom-20 -right-15  ">

<p className="font-bold text-2xl">Total Amount: ${totalAmount}</p>

<button className="text-white  rounded-md font-semibold w-full
text-[12px] p-2 px-5 mt-4 uppercase bg-green-700 hover:bg-green-500
      transition duration-300 ease-in">
  CheckOut Now
</button>
</div>
            }
    
           
    
          </div>
    
    
        </div>) : 
        
        (<div className="flex flex-col gap-5 justify-center items-center mt-8 h-[220px]">

         <h1 className="text-[22px] font-bold uppercase ">Cart is Empty</h1>
                                          
          <NavLink to={"/"}>

            <button className="text-white  rounded-md font-semibold 
              text-[12px] p-2 px-5 mt-4 uppercase bg-green-700 hover:bg-green-600
                    transition duration-300 ease-in">
              Shop Now
            </button>
          </NavLink>
        </div>)
      }
        </div>
      );
    
};

export default Cart;
