# setup-slider-react
Simple slider to create setup bar.

Example of use:
```javascript
import SetupSlider from 'setup-slider-react';
import 'setup-slider-react/lib/styles.css'

function App() {
    let currPercentages = 0;
    let customProps = {
        minLabel: "Min",
        maxLabel: "Max",
        barColor: "#b3b3b3",
        loadColor: "#ffbb50",
        pinColor: "#252d3b",
        percentages: 50,
        sliderSize: 27,
        getPercentages: value => (currPercentages = value)
    };

    return (
        <div className="App">
            <SetupSlider {...customProps} />
        </div>
    );
}
```
Live example: https://codesandbox.io/s/setup-slider-98fhe
