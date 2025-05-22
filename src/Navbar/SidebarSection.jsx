import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SidebarSection = ({ title, items }) => {
    console.log(title, items);
    const navigate = useNavigate();
const handleNavigation = (path) => {

    navigate(path);
  };
  return(
  <li className="mt-4">
    <div className="collapse collapse-arrow bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title">
        <Button btnName={title} />
      </div>
      <div className="collapse-content pl-4">
        <ul className="space-y-2">
          {items.map(({ name, path }) => (
            <li
              key={name}
              onClick={() => {
                handleNavigation(path);
                document.getElementById('my-drawer').checked = false;
              }}
              className="cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>
  )
};

export default SidebarSection;
