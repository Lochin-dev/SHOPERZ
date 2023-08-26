import React, { memo } from "react";
import "../../assets/styles/base/_index.scss";
import { bundles, muzlatgich } from "../../assets/images/png/index";
import { savat, star } from "../../assets/images/svg";
import { reklama } from "../../constants/reklama";
import { Link } from "react-router-dom";
import { Tabs } from "../../components/UI";

const index = memo(() => {
  return (
    <>
      <h1>Telephone</h1>
      <div className="container">
        <Link to={"/"}>Home</Link>
      </div>

      <section className="bundles_section">
        <div className="container">
          <h3 className="title">
            Bundles <span className="title_span">(4)</span>
          </h3>
          <div className="bundles">
            <div className="bundles_div">
              <div className="bundles_div__wrapper">
                <div className="">
                  <img src={bundles} alt="maxsulot" />
                </div>
                <div className="bundles_div__wrapper-wrapper">
                  <h3 className="bundles_div__wrapper-wrapper--title">
                    Smartphones
                  </h3>

                  <p className="bundles_div__wrapper-wrapper--text">
                    Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                  </p>
                  <span className="bundles_div__wrapper-wrapper--span">
                    $1,200.00
                  </span>
                </div>
              </div>
              <span className="bundles_div__span">+</span>

              <div className="bundles_div__wrapper">
                <div className="">
                  <img src={bundles} alt="maxsulot" />
                </div>
                <div className="bundles_div__wrapper-wrapper">
                  <h3 className="bundles_div__wrapper-wrapper--title">
                    Smartphones
                  </h3>
                  <p className="bundles_div__wrapper-wrapper--text">
                    Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                  </p>
                  <span className="bundles_div__wrapper-wrapper--span">
                    $1,200.00
                  </span>
                </div>
              </div>

              <span className="bundles_div__span">=</span>

              <div className="bundles_div__wrap">
                <span className="bundles_div__wrap-span">$1,260.00</span>
                <button className="bundles_div__wrap-btn">
                  Add to Cart <img src={savat} alt="icon" />
                </button>
              </div>
            </div>

            <select className="bundles_select" name="">
              <option className="bundles_select__option" value="telephone1">
                Shov more
              </option>
              <option value="telephone2">telephone2</option>
              <option value="telephone3">telephone3</option>
            </select>
          </div>
        </div>
      </section>

      <section className="reklama_section">
        <div className="container">
          <div className="tabs">
            <Tabs />
          </div>
          <div className="reklama">
            {reklama.map((e, idx) => (
              <img key={idx} src={e.svg} alt="svg" />
            ))}
          </div>
        </div>
      </section>

      <section className="top_section">
        <div className="container">
          <div className="flex">
            <div className="top">
              <h3 className="top_title">
                Top Rated <hr className="top_hr" />
              </h3>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top">
              <h3 className="top_title">
                Top Rated <hr className="top_hr" />
              </h3>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top">
              <h3 className="top_title">
                Top Rated <hr className="top_hr" />
              </h3>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <div className="wrap_price">
                      <span className="wrap_price__new">$600.00</span>
                      <span className="wrap_price__old">$700.00</span>
                    </div>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <div className="wrap_price">
                      <span className="wrap_price__new">$600.00</span>
                      <span className="wrap_price__old">$700.00</span>
                    </div>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <div className="wrap_price">
                      <span className="wrap_price__new">$600.00</span>
                      <span className="wrap_price__old">$700.00</span>
                    </div>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default index;
