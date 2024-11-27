import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={'heroContainer bg-cover bg-center bg-no-repeat ${styles.noramlFlex}'}
      style={{
        backgroundImage: "url(https://i.postimg.cc/wT50CmyC/hero.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className="text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize">
          Best Collection for <br /> Home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Discover premium items for your home with a blend of elegance and quality.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
