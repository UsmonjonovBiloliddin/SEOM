import React, { useState } from "react";
import "./Navbar_menu.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround } from "../../../Slice/BackraundSlice";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categoryThemes, categoryThemesInside } from "../../../Menu_media";
import { FiArrowLeft } from "react-icons/fi";
const Menu = () => {
  const state = useSelector((state) => state.background);
  const dispatch = useDispatch();
  const [categorySubmenuId, setCategorySubmenuId] = useState();

  const closeBack = () => {
    dispatch(NavManuBackround());
  };
  const ClickLi = () =>{
    setCategorySubmenuId(0)
    closeBack()
  }
  return (
    <div className={state.Manuopen ? "Menu active " : "Menu"}>
      <div className="Menu_logo">
        <Link to={"/"}>
          <img src="../images/Logo.png" alt="" />
          <div className="text">
            <p>Sanitariya-epidemiologik </p>
            <p>osoyishtalik markazi</p>
          </div>
        </Link>
        <IoClose className="close" onClick={() => closeBack()} />
      </div>
      <div className="Menu_adress">
        <div className="radio">
          <SlLocationPin />
        </div>
        <div className="text">
          <p>Manzil</p>
          <h5>Farg'ona Viloyati </h5>
        </div>
      </div>
      <div className="Menu_contact">
        <div className="radio">
          <IoCallOutline />
        </div>
        <div className="text">
          <p>Ishonchli raqam</p>
          <h5>1008</h5>
        </div>
      </div>

      <div className="categories">
        {categoryThemes &&
          categoryThemes.map((item) => {
            return (
              <div
                onClick={() => setCategorySubmenuId(item.id)}
                key={item.id}
                className="category"
              >
                <p>{item.name}</p>
                {item.icon ? <item.icon /> : ""}
              </div>
            );
          })}
        <Link to={"/ContactUs"}>
          <div onClick={() => closeBack()} className="category">
            <p>Bog'lanish</p>
          </div>
        </Link>
      </div>

      {categoryThemesInside
        .filter((item) => categorySubmenuId == item.id)
        .map((item) => (
          <div className="Menu_inside" key={item.id}>
            <div className="Menu_inside_top">
              <FiArrowLeft onClick={() => setCategorySubmenuId(null)} />
              <h3>{item.name}</h3>
            </div>
            <ul>
              {item.listCategoryNames.map((submenuItems) => (
                <Link to={submenuItems.link}>
                  <li onClick={() => ClickLi()} key={submenuItems.id}>
                    {submenuItems.subname}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Menu;
