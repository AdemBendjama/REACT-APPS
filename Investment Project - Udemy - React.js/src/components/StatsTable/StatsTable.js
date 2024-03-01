import React from "react";

function StatsTable(props) {

    const { stats } = props

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {stats.map((row) => {
                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{row.savings}</td>
                            <td>{row.yearlyInterest}</td>
                            <td>{row.totalInterest}</td>
                            <td>{row.totalInvestements}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}

export default StatsTable;