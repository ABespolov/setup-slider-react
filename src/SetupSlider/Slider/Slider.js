import React from "react";

class Slider extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.style.background !== this.props.style.background;
  }

  render() {
    const { children, refLink, click, style } = this.props;

    return (
      <div style={style} ref={refLink} onMouseDown={click} className="slider">
        {children}
      </div>
    );
  }
}

export default Slider;
