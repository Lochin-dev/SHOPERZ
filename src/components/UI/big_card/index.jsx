import { memo, useState } from "react";
import "../../../assets/styles/components/_praduct_card.scss";

import { praducts } from "../../../constants/praducts";

const index = memo(() => {
  const [buttonClasses, setButtonClasses] = useState([]); // Classlarni saqlash uchun state

  const handleButtonClick = () => {
    const newClass = `products_wrapper__btn2`;

    // Yangi klassni qo'shish yoki olib tashlash
    if (buttonClasses.includes(newClass)) {
      setButtonClasses(buttonClasses.filter((cls) => cls !== newClass));
    } else {
      setButtonClasses([...buttonClasses, newClass]);
    }
  };

  return (
    <>
      {praducts.map((praducts, idx) => (
        <div className="products" key={idx}>
          <p className="products_title">{praducts.title}</p>
          <p className="products_disc">{praducts.description}</p>
          <img src={praducts.img} alt="praduc_img" className="ptaducts_img" />
          <div className="products_wrapper">
            <div className="big_wrapper">
              <span className="big_price_new">{praducts.new_price}</span>
              <span className="big_price_old">{praducts.old_price}</span>
            </div>
            <button
              className={`products_wrapper__btn1 ${buttonClasses.join(" ")}`}
              onClick={handleButtonClick}
            >
              <img
                src={praducts.icon}
                alt="icon"
                className="praducts_wrapper__btn-icon"
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
});

export default index;
