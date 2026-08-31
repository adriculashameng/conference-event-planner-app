import { rooms } from "../data/rooms";

function RoomSelection({ selectedRooms, onQuantityChange }) {
  return (
    <section className="room-section" id="venue">
      <div className="section-header">
        <h2>Venue Room Selection</h2>
        <p>Select the rooms you need for your conference.</p>
      </div>

      <div className="room-grid">
        {rooms.map((room) => {
          const quantity = selectedRooms[room.id] || 0;

          return (
            <div className="room-card" key={room.id}>
              <img
                src={room.image}
                alt={room.name}
                className="room-image"
              />

              <div className="room-info">
                <h3>{room.name}</h3>

                <p>
                  Capacity: {room.capacity} people
                </p>

                <p className="room-price">
                  ${room.price.toLocaleString()}
                </p>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      onQuantityChange(
                        room.id,
                        Math.max(quantity - 1, 0)
                      )
                    }
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    onClick={() =>
                      onQuantityChange(
                        room.id,
                        quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RoomSelection;