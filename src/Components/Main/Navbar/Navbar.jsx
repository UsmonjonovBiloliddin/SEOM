import { SlLocationPin } from "react-icons/sl";
import "./Navbar.scss";
import { IoCallOutline } from "react-icons/io5";
import { GiGlobe } from "react-icons/gi";
import { MdOutlineRemoveRedEye, MdPhoneIphone } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { ChangeModal, Navbar_menu } from "../../../App";
import { useDispatch } from "react-redux";
import { NavManuBackround } from "../../../Slice/BackraundSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [openModal , setOpenModal] = useState(false)
  const dispatch = useDispatch();
  const openManu = () => {
    dispatch(NavManuBackround());
  };
  return (
    <div className="Navbar">
      <div className="Navbar_top">
        <div className="Navbar_top_left">
          <HiBars3 className="bars" onClick={() => openManu()} />
          <Link>
            <div className="Navbar_top_left_logo">
              <img src="../images/Logo.png" alt="" />
              <div className="text">
                <p>Sanitariya-epidemiologik </p>
                <p>osoyishtalik markazi</p>
              </div>
            </div>
          </Link>
          <div className="Navbar_top_left_adress">
            <div className="radio">
              <SlLocationPin />
            </div>
            <div className="text">
              <p>Manzil</p>
              <h5>Farg'ona Viloyati Lorem Ipsum is simply dummy text</h5>
            </div>
          </div>
          <div className="Navbar_top_left_contact">
            <div className="radio">
              <IoCallOutline />
            </div>
            <div className="text">
              <p>Ishonchli raqam</p>
              <h5>1008</h5>
            </div>
          </div>
        </div>
        <div className="Navbar_top_right">
          <div className="icons">
            <div className="icon">
              <MdPhoneIphone />
            </div>
            <div className="icon" >
              <MdOutlineRemoveRedEye  onClick={() => setOpenModal(!openModal)} />
              <ChangeModal openModal={openModal}/>
            </div>
          </div>

          <div className="Select">
            <GiGlobe className="select" />
            <select name="" id="">
              <option value=""> Uz</option>
              <option value="">Rus</option>
              <option value="">Eng</option>
            </select>
          </div>
        </div>
      </div>
      <Navbar_menu />
    </div>
  );
};

export default Navbar;
