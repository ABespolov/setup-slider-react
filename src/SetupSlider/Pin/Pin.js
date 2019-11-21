import React from "react";

const Pin = ({ refLink, click, style }) => {
  return (
    <div style={style} ref={refLink} onMouseDown={click} className="pin" />
  );
};

export default Pin;
