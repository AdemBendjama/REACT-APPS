import ChartBar from "./ChartBar";
import './Chart.css'
function Chart(props) {
    let dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
    let maxValue = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint, index) =>
                <ChartBar
                    key={index}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={maxValue}
                />
            )}
        </div>
    )
}


export default Chart;