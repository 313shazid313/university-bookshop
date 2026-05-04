// components/SideNavBar.jsx
import { Outlet } from "react-router";
import {
  FaHome,
  FaBook,
  FaPencilAlt,
  FaSearch,
  FaStickyNote,
  FaCrown,
  FaBars,
  FaCalculator,
} from "react-icons/fa";
import { NavLink } from "react-router";

const menuItems = [
  { icon: FaHome, label: "Home", path: "/dashboard/home" },
  { icon: FaBook, label: "Books", path: "/dashboard/users" },
  { icon: FaPencilAlt, label: "Stationary", path: "/dashboard/products" },
  { icon: FaSearch, label: "Lost & Found", path: "/dashboard/settings" },
  { icon: FaStickyNote, label: "Notes", path: "/dashboard/settings" },
  { icon: FaCalculator, label: "Calculator", path: "/dashboard/calculator" },
  { icon: FaCrown, label: "Subscriptions", path: "/dashboard/settings" },
];

const SideNavBar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Toggle Button */}
        <label
          htmlFor="main-drawer"
          className="btn btn-ghost drawer-button lg:hidden m-2 text-lg"
        >
          <FaBars className="mr-2" /> Open Menu
        </label>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <aside className="drawer-side">
        <label
          htmlFor="main-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <nav className="menu p-4 w-80 min-h-full bg-blue-900 text-white flex flex-col">
          <div className="mb-6 px-4 py-3">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <ul className="space-y-1">
            {menuItems.map(({ icon: Icon, label, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-3 rounded-lg transition-colors text-lg font-medium ${
                      isActive ? "bg-blue-800 text-white" : "hover:bg-blue-700"
                    }`
                  }
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideNavBar;
