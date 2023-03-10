import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">
          <p className="btn btn-ghost normal-case text-xl">Redux-React</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/todo">
              <p className="text-blue-500">Todo App</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
