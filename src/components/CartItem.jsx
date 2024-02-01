import {FcDeleteDatabase} from "react-icons/fc";
import {toast} from "react-hot-toast";
import { useDispatch } from "react-redux";
import{remove} from "../redux/Slices/CartSlice"


const CartItem = ({item, itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }
  return (
   
    
    <div className="flex flex-row items-center justify-between hover:scale-110
    transition duration-300 ease-in  p-4 mt-10 ml-5 rounded-md outline-transparent  shadow-lg">

      <div className=" flex flex-row gap-14 ">

        <div className=" h-[200px]">
        <img src={item.image} className=" h-full  w-full" />
      </div>

      <div className=" max-w-[300px] ">
      
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
        {item.title.split("").slice(0,45).join("")+"..."}</h1>

        <h1 className="w-40 text-gray-400 font-normal text-[12px] text-left">
        {item.description.split("").slice(0,55).join("")+"..."}</h1>

        <div className="flex  justify-center gap-10 items-center w-full mt-5">
         <p className="text-green-600 font-semibold"> ${item.price} </p>
       
         <div onClick={removeFromCart}>
         <FcDeleteDatabase className='text-2xl' />
         </div>

        </div>
      </div>
      
      </div>
      
    </div>
  )
};

export default CartItem;
