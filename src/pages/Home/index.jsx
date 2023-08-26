import React, { memo } from "react";
import "../../assets/styles/base/_index.scss";
import { Praduct, Categories, Big } from "../../components/UI/index";
import { muzlatgich } from "../../assets/images/png";
import { savat, star } from "../../assets/images/svg";
import { banner_img, bannerimg } from "../../assets/images/png/index";
import { reklama } from "../../constants/reklama";
import { Link } from "react-router-dom";

const index = memo(() => {
  return (
    <>
      <div className="container">
        <Link to={"/telephone"}>Telephone</Link>
      </div>

      <section className="produc_section">
        <div className="container">
          <h2 className="produc_section__title">
            Featured Products <hr className="produc_section__title-hr" />
          </h2>
          <div className="produc">
            <Praduct />
          </div>
        </div>
      </section>
      <section className="categorie_section">
        <div className="container">
          <h2 className="categorie_section__title">
            Categories <hr className="produc_section__title-hr" />
          </h2>
          <div className="categories">
            <Categories />
          </div>
        </div>
      </section>
      <section className="banner_section">
        <div className="container">
          <div className="banner_card">
            <div className="banner_card__one">
              <h2 className="banner_card__one--title">
                PORTABLE SPEAKERS COLLECTION{" "}
                <span style={{ fontWeight: "700" }}>2023</span>
              </h2>
              <img
                src={banner_img}
                alt="banner"
                className="banner_card__one--img"
              />
            </div>

            <div className="banner_card__two">
              <h2 className="banner_card__two--title">
                ALL ACCESSORIES FOR
                <span style={{ fontWeight: "700" }}> GAMERS</span>
              </h2>
              <img
                src={bannerimg}
                alt="banner"
                className="banner_card__two--img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="produc_section">
        <div className="container">
          <h2 className="produc_section__title">
            Bestsellers <hr className="produc_section__title-hr" />
          </h2>
          <div className="produc">
            <Big />
          </div>
        </div>
      </section>

      <section className="reklama_section">
        <div className="container">
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
