import React,{useEffect,useState} from 'react'
import HighchartsReact from "highcharts-react-official"
import Highcharts, { getOptions } from "highcharts"
import axios from 'axios';

const Charts = () => {

    // var [data,setData] = useState({});
    const [heapData,setHeapData] = useState('');
    // const [cpuData,setcpuData] = useState([]);
    const [options,setOptions]=useState({});
    const [reservedSizeChartList,setReservedSizeChartList]=useState([]);

    function getValues(arr, b, c) {
        return arr.map((obj) => [obj[b], obj[c]]);
      }
    
      useEffect(() => {
        console.log("Entered chart component")
        axios.get('http://localhost:8080').then(
            response => {
                setHeapData(response.data)
                // console.log(heapData)
            }).catch(err => console.log(err));
            
    },[]);

    const getOptionsLocal = (arr,b,c) => {
        // console.log("here",arr)
        var temp = getValues(arr,b,c);
        // console.log(temp)
        var options = {
            title : {
                text : c+" vs "+b
            },
            credits: {
                enabled: false
            },
            xAxis: {
                title: {
                  text: "X Axis Name",
                },
              },
              yAxis: {
                title: {
                  text: "Y Axis Name",
                },
              },
                series: [{
                    data: temp
                }]
            }
            return options;
    }

    const getOptionsLocal2 = (arr,b,c,d) => {
        // console.log("here",arr)
        var temp = getValues(arr,b,c);
        var temp1 = getValues(arr,b,d);
        // console.log(temp)
        var options = {
            title : {
                text : c+" & "+d+" vs "+b
            },
            credits: {
                enabled: false
            },
            xAxis: {
                title: {
                  text: "X Axis Name",
                },
              },
              yAxis: {
                title: {
                  text: "Y Axis Name",
                },
              },
            series: [
                {
                    name : c,
                    data: temp
                },
                {
                    name : d,
                    data: temp1
                }
        ]
        }
            return options;
    }


  return (
     <div>
        {/* { getOptionsLocal(heapData.heapSummaryDataList,"startTime","reservedSize")} */}
        {
        heapData ? 
        (<div>
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal(heapData.heapSummaryDataList,"startTime","reservedSize")} />
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal(heapData.heapSummaryDataList,"startTime","heapUsed")} />
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal(heapData.cpuLoadDataList,"startTime","CpuJvmUserPercentage")} />
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal(heapData.cpuLoadDataList,"startTime","CpuJvmSystemPercentage")} />
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal(heapData.cpuLoadDataList,"startTime","CpuMachineTotalPercentage")} />
            <HighchartsReact highcharts={Highcharts} options={getOptionsLocal2(heapData.cpuLoadDataList,"startTime","TotalJVMPercentage","CpuMachineTotalPercentage")} />
        </div>
        )
         : "Error"}
    </div>
  )
}
export default Charts