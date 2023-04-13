import React from "react";

function Footer() {
  return (
    <div className="wpFooter">
      <h2 className="titleFooter">Your Card</h2>
      <div className="wpInput">
      <input type="text"  className="inputItem"/>
      <input type="text" className="inputItem"/>
      <input type="text" className="inputItem"/>
      </div>
      <div className="footer-end">
        <h4>total</h4>
        <button>reset</button>
      </div>
    </div>
  );
}

export default Footer;
