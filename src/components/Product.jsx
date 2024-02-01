import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({item}) => {
  const {cart}=useSelector((state)=> state);
  const dispatch=useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  function addToCart(){
    dispatch(add(item));
    toast.success("Added To Cart")
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
     transition duration-300 ease-in gap-3 p-4 mt-10 ml-5  outline-zinc-500 rounded-xl shadow-xl ">
    <div>
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title.split("").slice(0,25).join ("")+"..."}</p>
    </div>

    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split("").slice(0,75).join("")+ "..." }</p>
    </div>

     <div className="h-[180px]">
      <img src={item.image} alt="itemimage"  className="h-full w-full"/>
     </div>


     <div className="flex justify-between gap-12 items-center w-full mt-5">
     <div>
      <p className="text-green-600 font-semibold">${item.price}</p>
     </div>
     {

      cart.some((p)=> p.id === item.id)?
       (<button
         className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
        onClick={removeFromCart}>Remove</button>)

       : (<button 
         className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
       onClick={addToCart}>Add to Cart</button>)
     }

     </div>

    </div>
  )
};

export default Product;
