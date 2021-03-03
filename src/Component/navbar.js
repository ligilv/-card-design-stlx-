import React from "react";
import "./Navbar.css";
function Navbar({ onShow, click, onHide }) {
  return (
    <div className="navbody">
      <div className="title">
        <span className="name"> EMPower</span>
        <div className="btnWrapper">
          {/* if the click is false then  button will be shown */}
          {click ? null : (
            <button className="showEmp" onClick={onShow}>
              Get Users
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
