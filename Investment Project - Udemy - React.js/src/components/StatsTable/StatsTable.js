import React from "react";
import styles from './StatsTable.module.css'
function StatsTable(props) {

    const formatToUSD = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,

        }).format(value)
    }

    const { stats } = props

    return (
        <table className={styles.result}>
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
                            <td>{formatToUSD(row.savings)}</td>
                            <td>{formatToUSD(row.yearlyInterest)}</td>
                            <td>{formatToUSD(row.totalInterest)}</td>
                            <td>{formatToUSD(row.totalInvestements)}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}

export default StatsTable;