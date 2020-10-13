import React, { Component } from 'react';
import CanvasJSReact from '../../utils/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
//var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "My Skill Set"
			},
			axisX: {
                title: "Technologies",
				reversed: true,
			},
			axisY: {
				title: "Expertise",
				// labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  8.5, label: "HTML" },
					{ y:  6.5, label: "CSS" },
					{ y:  8.5, label: "JavaScript/ES6" },
                    { y:  7, label: "TypeScript" },
                    { y:  7.5, label: "JQuery" },
					{ y:  7, label: "React" },
					{ y:  8.5, label: "Angular" },
                    { y:  6.5, label: "Node" },
                    { y:  6, label: "MySQL" },
                    { y:  5, label: "MongoDB" },
                    { y:  2.5, label: "Java" }
				]
			}]
		}
		
		return (
		<div style={{padding:'20'}}>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;