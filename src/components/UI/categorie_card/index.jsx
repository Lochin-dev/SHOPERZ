import { memo, useEffect, useState } from "react";
import "../../../assets/styles/components/_praduct_card.scss";

import { categories } from "../../../constants/categories";

const index = memo(() => {
  const [buttonClasses, setButtonClasses] = useState([]); // Classlarni saqlash uchun state

  const handleButtonClick = () => {
    const newClass = `categorie_btn2`;

    // Yangi klassni qo'shish yoki olib tashlash
    if (buttonClasses.includes(newClass)) {
      setButtonClasses(buttonClasses.filter((cls) => cls !== newClass));
    } else {
      setButtonClasses([...buttonClasses, newClass]);
    }
  };

  return (
    <>
      {categories.map((categories, idx) => (
        <div className="categorie" key={idx}>
          <p className="categorie_title">{categories.title}</p>

          <div className="categorie_wrapper">
            <img
              src={categories.img}
              alt="praduc_img"
              className="categorie_wrapper__img"
            />
          </div>
          <button
            className={`categorie_btn1 ${idx} ${buttonClasses.join(" ")}`}
            onClick={handleButtonClick}
          >
            <img
              src={categories.icon}
              alt="icon"
              className="categorie_wrapper__btn-icon"
            />
          </button>
        </div>
      ))}
    </>
  );
});

export default index;
