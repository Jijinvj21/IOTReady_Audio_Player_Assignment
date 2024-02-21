import { Link } from "react-router-dom";
import "./Dropdown.scss";
// eslint-disable-next-line
const Dropdown = ({ icon, items }) => {
  return (
    <div>
      <div className="dropdown">
        {icon}{" "}
        <div className="dropdown-content ">
        {/* eslint-disable-next-line */}
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
