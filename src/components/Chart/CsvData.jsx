import React from "react";
import Papa from "papaparse";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from './PieChart'

Chart.register(CategoryScale);

const CsvData = () => {

    const [data, setData] = useState([]);
    const [column, setColumn] = useState([]);
    const [values, setValues] = useState([]);
    // const [chartData, setChartData] = useState({});


    const handleFile = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const columnArray = [];
                const valuesArray = [];

                result.data.map((d) => {
                    const column = Object.keys(d);
                    const values = Object.values(d);
                    columnArray.push(column);
                    valuesArray.push(values);
                });

                setData(result.data);
                setColumn(columnArray[0]);
                setValues(valuesArray);

                console.log(typeof result.data);
                console.log(result.data)
            },
        });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <input type="file" name="file" accept=".csv"
                style={{
                    display: "block",
                    margin: "10px auto "

                }}
                onChange={handleFile}
            />

            <br />
            <PieChart chartData={data} />
        </div>
    );
}

export default CsvData;