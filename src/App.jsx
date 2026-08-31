import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import RoomSelection from "./components/RoomSelection";
import AddOnSelection from "./components/AddOnSelection";
import MealSelection from "./components/MealSelection";
import SummaryModal from "./components/SummaryModal";

import { rooms } from "./data/rooms";
import { addOns } from "./data/addons";
import { meals } from "./data/meals";

function App() {
  const [selectedRooms, setSelectedRooms] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [showSummary, setShowSummary] = useState(false);

  const changeRoomQuantity = (id, quantity) => {
    setSelectedRooms((previous) => ({
      ...previous,
      [id]: quantity,
    }));
  };

  const changeAddOnQuantity = (id, quantity) => {
    setSelectedAddOns((previous) => ({
      ...previous,
      [id]: quantity,
    }));
  };

  const toggleMeal = (id) => {
    setSelectedMeals((previous) => {
      if (previous.includes(id)) {
        return previous.filter((mealId) => mealId !== id);
      }

      return [...previous, id];
    });
  };

  const roomTotal = rooms.reduce((total, room) => {
    const quantity = selectedRooms[room.id] || 0;

    return total + room.price * quantity;
  }, 0);

  const addOnTotal = addOns.reduce((total, addOn) => {
    const quantity = selectedAddOns[addOn.id] || 0;

    return total + addOn.price * quantity;
  }, 0);

  const mealTotal = meals.reduce((total, meal) => {
    if (selectedMeals.includes(meal.id)) {
      return total + meal.price * numberOfPeople;
    }

    return total;
  }, 0);

  const grandTotal =
    roomTotal +
    addOnTotal +
    mealTotal;

  const scrollToVenue = () => {
    document
      .getElementById("venue")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <div className="landing-page">
        <div className="overlay">

          <Navbar
            onShowDetails={() =>
              setShowSummary(true)
            }
          />

          <main className="hero-content">

            <div className="hero-left">
              <h1>
                Conference
                <br />
                Expense Planner
              </h1>

              <p>
                Plan your next major event with us!
              </p>

              <button
                className="get-started"
                onClick={scrollToVenue}
              >
                Get Started
              </button>
            </div>

            <div className="hero-right">
              <h2>
                Welcome to BudgetEase Solutions
              </h2>

              <p>
                Welcome to BudgetEase Solutions,
                your trusted partner in simplifying
                budget management and financial
                solutions.
              </p>

              <p>
                We help businesses and individuals
                plan their events efficiently with
                simple and user-friendly budgeting
                solutions.
              </p>
            </div>

          </main>
        </div>
      </div>

      <RoomSelection
        selectedRooms={selectedRooms}
        onQuantityChange={changeRoomQuantity}
      />

      <AddOnSelection
        selectedAddOns={selectedAddOns}
        onQuantityChange={changeAddOnQuantity}
      />

      <MealSelection
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        selectedMeals={selectedMeals}
        onMealChange={toggleMeal}
      />

      <div className="total-section">
        <h2>Estimated Conference Expense</h2>

        <div className="total-breakdown">
          <p>
            Venue:
            <strong>
              ${roomTotal.toLocaleString()}
            </strong>
          </p>

          <p>
            Add-ons:
            <strong>
              ${addOnTotal.toLocaleString()}
            </strong>
          </p>

          <p>
            Meals:
            <strong>
              ${mealTotal.toLocaleString()}
            </strong>
          </p>
        </div>

        <div className="grand-total">
          ${grandTotal.toLocaleString()}
        </div>

        <button
          className="show-summary-button"
          onClick={() => setShowSummary(true)}
        >
          Show Details
        </button>
      </div>

      <SummaryModal
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
        roomTotal={roomTotal}
        addOnTotal={addOnTotal}
        mealTotal={mealTotal}
        grandTotal={grandTotal}
        selectedRooms={selectedRooms}
        selectedAddOns={selectedAddOns}
        selectedMeals={selectedMeals}
        numberOfPeople={numberOfPeople}
        rooms={rooms}
        addOns={addOns}
        meals={meals}
      />
    </>
  );
}

export default App;