import {
    calculateInvestmentResults,
    formatter,
} from '../../util/investment.js';

export default function Result({ statsObj }) {
    const statsArray = calculateInvestmentResults(statsObj);
    const totalInterests = [];

    let totalInterestPerYear = 0;

    for (let i = 0; i < statsArray.length; i++) {
        totalInterestPerYear += statsArray[i].interest;
        totalInterests.push(totalInterestPerYear);
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {statsArray.map((year, index) => (
                    <tr key={index}>
                        <td>{year.year} </td>
                        <td>{formatter.format(year.valueEndOfYear)} </td>
                        <td>{formatter.format(year.interest)} </td>
                        <td>{formatter.format(totalInterests[index])} </td>
                        <td>{formatter.format(statsObj.initialInvestment)} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
