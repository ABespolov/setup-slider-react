import React from "react";
import "./styles.css";

import Slider from "./Slider/Slider";
import Pin from "./Pin/Pin";

class SetupSlider extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.pin = React.createRef();

    this.state = {
      isClicked: false,
      percentages: this.props.percentages,
      initPosition: 0,
      maxPos: 0,
      minPos: -this.props.sliderSize / 2,
      sliderSize: this.props.sliderSize
    };
  }

  componentDidMount() {
    this.setState({
      maxPos: this.slider.current.offsetWidth - this.props.sliderSize / 2,
      initPosition:
        (this.slider.current.offsetWidth * this.state.percentages) / 100 -
        this.props.sliderSize / 2
    });
  }

  moveSlider = e => {
    let halfPin = this.props.sliderSize / 2;
    let pos = e.nativeEvent.layerX - halfPin;
    let currPercentages = null;

    if (pos >= this.state.minPos && pos <= this.state.maxPos) {
      if (this.props.percentages !== undefined) {
        currPercentages = Math.trunc(
          ((pos + halfPin) / this.slider.current.offsetWidth) * 100
        );
      }

      this.pin.current.style.transform = `translateX(${pos}px)`;
      this.slider.current.style.background = `linear-gradient(to right, ${
        this.props.loadColor
      } ${pos + halfPin}px, ${this.props.barColor} 0, ${this.props.barColor})`;

      this.setState({ position: pos + halfPin, percentages: currPercentages });
      this.props.getPercentages(currPercentages);
    }
  };

  sliderMouseMove = e => {
    e.persist();

    if (this.state.isClicked) {
      this.moveSlider(e);
    }
  };

  render() {
    return (
      <div id="setupSlider">
        <div className="sliderLabels">
          <p className="sliderLabel">{this.props.minLabel}</p>
          <p className="sliderLabel">{this.state.percentages}</p>
          <p className="sliderLabel">{this.props.maxLabel}</p>
        </div>
        <div
          onMouseLeave={() => this.setState({ isClicked: false })}
          onMouseUp={() => this.setState({ isClicked: false })}
          onMouseMove={this.sliderMouseMove}
          className="container"
          style={{ "--slider-height": this.state.sliderSize + "px" }}
        >
          <Slider
            style={{
              background: `linear-gradient(to right, ${this.props.loadColor} ${
                this.state.initPosition
              }px, ${this.props.barColor} 0, ${this.props.barColor})`
            }}
            refLink={this.slider}
            click={this.moveSlider}
          >
            <Pin
              style={{
                background: this.props.pinColor,
                transform: `translateX(${this.state.initPosition}px)`
              }}
              refLink={this.pin}
              click={() => this.setState({ isClicked: true })}
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default SetupSlider;
