function SummaryModal({
  isOpen,
  onClose,
  roomTotal,
  addOnTotal,
  mealTotal,
  grandTotal,
  selectedRooms,
  selectedAddOns,
  selectedMeals,
  numberOfPeople,
  rooms,
  addOns,
  meals,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="summary-modal">
        <button
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Conference Expense Summary</h2>

        <div className="summary-section">
          <h3>Venue</h3>

          {rooms
            .filter((room) => selectedRooms[room.id] > 0)
            .map((room) => (
              <div className="summary-row" key={room.id}>
                <span>
                  {room.name} × {selectedRooms[room.id]}
                </span>

                <span>
                  $
                  {(
                    room.price *
                    selectedRooms[room.id]
                  ).toLocaleString()}
                </span>
              </div>
            ))}

          {roomTotal === 0 && (
            <p className="empty-summary">
              No rooms selected.
            </p>
          )}
        </div>

        <div className="summary-section">
          <h3>Add-ons</h3>

          {addOns
            .filter((addOn) => selectedAddOns[addOn.id] > 0)
            .map((addOn) => (
              <div className="summary-row" key={addOn.id}>
                <span>
                  {addOn.name} × {selectedAddOns[addOn.id]}
                </span>

                <span>
                  $
                  {(
                    addOn.price *
                    selectedAddOns[addOn.id]
                  ).toLocaleString()}
                </span>
              </div>
            ))}

          {addOnTotal === 0 && (
            <p className="empty-summary">
              No add-ons selected.
            </p>
          )}
        </div>

        <div className="summary-section">
          <h3>Meals</h3>

          {meals
            .filter((meal) =>
              selectedMeals.includes(meal.id)
            )
            .map((meal) => (
              <div className="summary-row" key={meal.id}>
                <span>
                  {meal.name} × {numberOfPeople}
                </span>

                <span>
                  $
                  {(
                    meal.price * numberOfPeople
                  ).toLocaleString()}
                </span>
              </div>
            ))}

          {mealTotal === 0 && (
            <p className="empty-summary">
              No meals selected.
            </p>
          )}
        </div>

        <div className="summary-total">
          <span>Total</span>
          <strong>
            ${grandTotal.toLocaleString()}
          </strong>
        </div>

        <button
          className="close-summary"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SummaryModal;