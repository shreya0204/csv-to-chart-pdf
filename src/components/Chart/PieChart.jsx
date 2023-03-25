// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";


function PieChart({ chartData }) {

    const formattedData = {
        interestRates: [],
        creditLimits: [],
        ficoScores: [],
        modelOutputs: [],
        modelTargets: [],
        monthlySalaries: [],
        utilizations: [],
    };

    chartData.forEach((card) => {
        formattedData.interestRates.push(parseFloat(card.card_interest_rate));
        formattedData.creditLimits.push(parseFloat(card.card_limit));
        formattedData.ficoScores.push(parseFloat(card.fico));
        formattedData.modelOutputs.push(parseFloat(card.model_output));
        formattedData.modelTargets.push(parseFloat(card.model_target));
        formattedData.monthlySalaries.push(parseFloat(card.monthly_salary));
        formattedData.utilizations.push(parseFloat(card.utilization));
    });

    const data = {
        labels: ['monthly_salary', 'fico', 'utilization', 'card_limit', 'card_interest_rate', 'model_output', 'model_target'],
        datasets: [{
            label: 'Credit Limits',
            data: formattedData.creditLimits,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Monthly Salary',
            data: formattedData.monthlySalaries,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Fico',
            data: formattedData.ficoScores,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1

        },
        {
            label: 'Utilization',
            data: formattedData.utilizations,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1

        },
        {
            label: 'card_interest_rate',
            data: formattedData.interestRates,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1

        },
        {
            label: 'model_output',
            data: formattedData.modelOutputs,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1

        },
        {
            label: 'model_target',
            data: formattedData.modelTargets,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1

        }
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="chart-container" style={{
            width: '70vw'
        }}>
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Line
                data={data}
                options={chartOptions}
            />
        </div>
    );
}
export default PieChart;