import React from "react";

import SetupSliderComponent from "./SetupSlider/SetupSlider";
import PropTypes from "prop-types";

const SetupSlider = (props) => {
    return <SetupSliderComponent {...props}/>;
};

SetupSlider.propTypes = {
    minLabel: PropTypes.string,
    maxLabel: PropTypes.string,
    barColor: PropTypes.string,
    loadColor: PropTypes.string.isRequired,
    pinColor: PropTypes.string.isRequired,
    percentages: PropTypes.number,
    sliderSize: PropTypes.number.isRequired,
    getPercentages: PropTypes.func.isRequired
};

SetupSlider.defaultProps = {
    barColor: "transparent"
};

export default SetupSlider;