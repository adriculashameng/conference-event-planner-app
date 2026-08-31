import { addOns } from "../data/addons";

function AddOnSelection({ selectedAddOns, onQuantityChange }) {
  return (
    <section className="addon-section" id="addons">
      <div className="section-header">
        <h2>Add-ons Selection</h2>
        <p>Select the equipment and services you need.</p>
      </div>

      <div className="addon-grid">
        {addOns.map((addOn) => {
          const quantity = selectedAddOns[addOn.id] || 0;

          return (
            <div className="addon-card" key={addOn.id}>
              <img
                src={addOn.image}
                alt={addOn.name}
                className="addon-image"
              />

              <div className="addon-info">
                <h3>{addOn.name}</h3>

                <p className="addon-price">
                  ${addOn.price.toLocaleString()}
                </p>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      onQuantityChange(
                        addOn.id,
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
                        addOn.id,
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

export default AddOnSelection;