import { memo } from "react";
import "../../../assets/styles/components/_praduct_card.scss";

import { praducts } from "../../../constants/praducts";

const index = memo(() => {
  return (
    <>
      <div className="container"></div>
      {praducts.map((praducts, idx) => (
        <div className="products" key={idx}>
          <p className="products_title">{praducts.title}</p>
          <p className="products_disc">{praducts.description}</p>
          <img src={praducts.img} alt="praduc_img" className="ptaducts_img" />
          <div className="products_wrapper">
            <p className="products_wrapper__old">
              {praducts.old_price} <br />
              <span className="products_wrapper__old-new"></span>
            </p>

            <div className="">
              <label className="btn-lock" htmlFor="inpLock">
                <img src={praducts.icon} alt="savat" />
              </label>
              <input id="inpLock" type="checkbox" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default index;
