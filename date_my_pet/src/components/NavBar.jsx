import logo from "../assets/LogoDMP.png";

function NavBar() {
  return (
    <header>
      <h1>Date My Pet</h1>
      <div className="NavButtons">
        <button alt="Profile">👤</button>
        <button alt="Settings">⚙️</button>
      </div>
    </header>
  );
}

export default NavBar;
