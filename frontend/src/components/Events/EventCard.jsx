import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  }
  return (
    <div
      className={`w-full gridgrid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0 ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      {/* event image scaling  */
      // "grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
      }

      <div className="w-[300px] h-[200px] object-cover"> 
        <img src={`${data.images[0]?.url}`} alt="" />
      </div>
      <div className="w-full lg:[w-50%] justify-center">
        <h2 className= "font-bold text-[26px] text-[#333] leading-[1.3]">{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex py-5">
          <div className="flex">
            <h5 className="font-[500] text-[16px] text-[#333] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[24px] text-[#d55b45] font-Roboto margin-right: 12px">
              {data.discountPrice}$
            </h5>
            <h5>
            <span className=" ml-4 pr-3 font-[400] text-[18px] text-[#44a55e]">
                Hurry, limited stock!!
            {/* {data.sold_out} */}
            </span>
            </h5>
          </div>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
