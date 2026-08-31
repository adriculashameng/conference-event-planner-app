function Navbar({ onShowDetails }) {
  return (
    <nav className="navbar">
      <div className="logo">
        Conference Expense Planner
      </div>

      <div className="nav-links">
        <a href="#venue">Venue</a>
        <a href="#addons">Add-ons</a>
        <a href="#meals">Meals</a>

        <button onClick={onShowDetails}>
          Show Details
        </button>
      </div>
    </nav>
  );
}

export default Navbar;