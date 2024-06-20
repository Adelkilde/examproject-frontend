import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/participants">Participants</Link>
        </li>
        <li>
          <Link to="/disciplines">Disciplines</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
      </ul>
    </nav>
  );
}
