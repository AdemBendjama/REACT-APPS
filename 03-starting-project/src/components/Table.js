
function Table(props) {

    const rows = props.data.map(
        (year) => {
            return (
                <tr>
                    <td>{year.year}</td>
                    <td>{year.savingsEndOfYear}</td>
                    <td>{year.yearlyInterest}</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>{year.yearlyContribution}</td>
                </tr>
            )

        }
    )


    return (
        <>
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
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default Table;