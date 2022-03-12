import React from 'react'

export default function NutritionTable({ tableData }) {

  return (
    <section>
          <table>
            <caption>Nutrition Facts</caption>
            <tbody>
            <tr><td>Calories</td><td colSpan={2}>{tableData.calories}</td></tr>
            <tr><td colSpan={3}>% Daily Value</td></tr>
            {tableData.nutrients.map(cell =>
              {return(
                <tr><td>{cell.nutrient}</td><td>{cell.amount}</td><td>{cell['daily value']}</td></tr>
              )}
              )}
          </tbody>
          </table>
        </section>
  )
}
