import React from "react";
import "./Navbar_menu.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround, SignBackraund } from "../../../Slice/BackraundSlice";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  const state = useSelector((state) => state.background);
  const dispatch = useDispatch();

  const closeBack = () => {
    dispatch(NavManuBackround());
  };
  return (
    <div className={state.Manuopen ? "Menu active " : "Menu"}>
      <Link>
        <div className="Menu_logo">
          <img src="../images/Logo.png" alt="" />
          <div className="text">
            <p>Sanitariya-epidemiologik </p>
            <p>osoyishtalik markazi</p>
          </div>
          <IoClose className="close" onClick={() => closeBack()} />
        </div>
      </Link>
      <div className="Menu_adress">
        <div className="radio">
          <SlLocationPin />
        </div>
        <div className="text">
          <p>Manzil</p>
          <h5>Farg'ona Viloyati Lorem Ipsum is simply dummy text</h5>
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
        <div className="category">
          <p>Tashkilot haqida</p>
          <FaChevronRight />
        </div>
        <div className="category">
          <p>Hujjatlar</p>
          <FaChevronRight />
        </div>
        <div className="category">
          <p>Rahbariyat</p>
          <FaChevronRight />
        </div>
        <div className="category">
          <p>Bog’lanish</p>
          <FaChevronRight />
        </div>
        <div className="category">
          <p>Matbuot xizmatlari</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
