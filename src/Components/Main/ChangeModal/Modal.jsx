import React from 'react'
import "./Modal.scss"
import { FormControl, FormControlLabel, Radio, RadioGroup, Slider } from '@mui/material'
import { changeColor, changeSize } from '../../../Slice/BackraundSlice';
import { useDispatch } from 'react-redux';
const Modal = ({openModal , setOpenModal}) => {
    const dispatch = useDispatch();
    const changeColors = (color) => {
        dispatch(changeColor(color));
      };
      const changeSizes = (size) => {
        if(size == 16){
          dispatch(changeSize("Medium"))
        }
        if(size == 17){
          dispatch(changeSize("Big"))
        }
        if(size == 15){
          dispatch(changeSize("Small"))
        }
      }
  return (
    <div className={openModal ? "Modal active" : "Modal"}>
        <div className="kub"></div>
    <div className="text">
      <p>Ko’rinishi</p>
    </div>
    <div className="colors">
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className="colors_colors">
            <div className="color">
              <div
                className="box"
                style={{ backgroundColor: "#169FD8" }}
              ></div>
              <p>Normal</p>
              <div className="radio">
                <FormControlLabel
                  value="Normal"
                  control={<Radio />}
                  style={{ marginLeft: "18px", padding: "0px" }}
                  onChange={(e) => changeColors(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <div
                className="box"
                style={{ backgroundColor: "#C4C4C4" }}
              ></div>
              <p>Gray</p>
              <div className="radio">
                <FormControlLabel
                  value="Gray"
                  control={<Radio />}
                  style={{ marginLeft: "18px", padding: "0px" }}
                  onChange={(e) => changeColors(e.target.value)}
                />
              </div>
            </div>
            <div className="color">
              <div
                className="box"
                style={{ backgroundColor: "#021B34" }}
              ></div>
              <p>Dark</p>
              <div className="radio">
                <FormControlLabel
                  value="Dark"
                  control={<Radio />}
                  style={{ marginLeft: "18px", padding: "0px" }}
                  onChange={(e) => changeColors(e.target.value)}
                />
              </div>
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
    <div className="size">
      <p>Shrift o’lchami</p>
      <div className="slider">
      <Slider
        aria-label="Temperature"
        defaultValue={16}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={1}
        marks
        min={15}
        max={17}
        onChange={(e) => changeSizes(e.target.value)}
      />
      </div>
      
    </div>
   
  </div>
  )
}

export default Modal