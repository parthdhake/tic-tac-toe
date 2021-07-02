import React from "react";

const beforeStyle = {
  background: "white",
  width: "90%",
  height: "90%",
  position: "absolute",
  borderRadius: "50%",
  left: "5px",
  // transform: 'rotate(45deg)'
};
const afterStyle = {
  background: "#252526",
  width: "70%",
  height: "70%",
  position: "absolute",
  borderRadius: "50%",
  left: "15px",
  top: "10px",
  // transform: 'rotate(45deg)'
};

const O = () => {
  return (
    <>
      <div className="before" style={beforeStyle}></div>
      <div className="after" style={afterStyle}></div>
    </>
  );
};

export default O;