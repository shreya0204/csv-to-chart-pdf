import React from "react";
import Papa from "papaparse";
import { useState } from "react";


const CsvData = () => {
    const [data, setData] = useState([]);
    const [column, setColumn] = useState([]);
    const [values, setValues] = useState([]);


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

                // here the whole data is coming in array 
                console.log(result.data)
            },
        });
    };

    return (
        <div>
            <input type="file" name="file" accept=".csv"
                style={{
                    display: "block",
                    margin: "10px auto "
                }}
                onChange={handleFile}
            />

            <br />

            <table style={{ borderCollapse: "collapse", border: "1px solid black", margin: "5px auto" }}>
                <thead>
                    <tr>
                        {column.map((col, i) => {
                            return (
                                <th key={i}>{col}</th>
                            )
                        })}
                    </tr>
                </thead>
                {values.map((val, i) => {
                    return (
                        <tr key={i}>
                            {val.map((v, j) => {
                                return (
                                    <td key={j}>{v}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default CsvData;