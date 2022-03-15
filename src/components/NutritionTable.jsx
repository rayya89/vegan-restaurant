// Great, just the CSS was lacking here
export default function NutritionTable({ tableData }) {
  return (
    <section className="nutrition-table">
      <table>
        <caption>Nutrition Facts</caption>
        <tbody>
          <tr>
            <td>Calories</td>
            <td colSpan={2}>{tableData.calories}</td>
          </tr>
          <tr>
            <td colSpan={3}>% Daily Value</td>
          </tr>
          {tableData.nutrients.map((cell) => {
            return (
              <tr>
                <td>{cell.nutrient}</td>
                <td>{cell.amount}</td>
                <td>{cell["daily value"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
