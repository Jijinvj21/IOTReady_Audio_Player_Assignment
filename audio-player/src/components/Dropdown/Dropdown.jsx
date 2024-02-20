import { Link } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = ({ icon, items }) => {
  return (
    <div>
      <div className="dropdown">
        {icon}{" "}
        <div className="dropdown-content">
          {items.map((item) => (
            <Link key={item.key} to={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
