import { meals } from "../data/meals";

function MealSelection({
  numberOfPeople,
  setNumberOfPeople,
  selectedMeals,
  onMealChange,
}) {
  return (
    <section className="meal-section" id="meals">
      <div className="section-header">
        <h2>Meals Selection</h2>
        <p>Select the meals you want to provide for your guests.</p>
      </div>

      <div className="people-input">
        <label htmlFor="people">
          Number of People
        </label>

        <input
          id="people"
          type="number"
          min="1"
          value={numberOfPeople}
          onChange={(e) =>
            setNumberOfPeople(
              Math.max(Number(e.target.value), 1)
            )
          }
        />
      </div>

      <div className="meal-list">
        {meals.map((meal) => (
          <label className="meal-option" key={meal.id}>
            <input
              type="checkbox"
              checked={selectedMeals.includes(meal.id)}
              onChange={() => onMealChange(meal.id)}
            />

            <span className="meal-name">
              {meal.name}
            </span>

            <span className="meal-price">
              ${meal.price} / person
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default MealSelection;