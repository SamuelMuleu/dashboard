
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaAngleDown,
  FaTachometerAlt,
  FaChartLine,
  FaCalendarAlt,
  FaUsers,
  FaBell,
} from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { MdOutlineHelpOutline } from "react-icons/md";

interface SidebarNavProps {
  activeComponent: string;
  handleNavigation: (component: string) => void;
}

const SidebarNav = ({ activeComponent, handleNavigation }: SidebarNavProps) => {

    const isActive = (component: string) => (activeComponent === component ? "active" : "");
  
    return (
      <>
    
  
    
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>MAIN MENU</div>
            <ul>
              <li className={isActive("dashboard")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("dashboard")}>
                  <FaTachometerAlt /> Dashboard
                </Link>
              </li>
              <li className={isActive("analytics")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("analytics")}>
                  <FaChartLine /> Analytics <FaAngleDown />
                </Link>
              </li>
              <li className={isActive("schedule")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("schedule")}>
                  <FaCalendarAlt /> Schedule
                </Link>
              </li>
              <li className={isActive("members")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("members")}>
                  <FaUsers /> Members
                </Link>
              </li>
              <li className={isActive("notifications")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("notifications")}>
                  <FaBell /> Notifications
                </Link>
              </li>
            </ul>
            <ul>
              <div>SETTINGS</div>
              <li className={isActive("settings")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("settings")}>
                  <RiSettings4Fill /> Settings
                </Link>
              </li>
              <li className={isActive("helpcenter")}>
                <Link to="#" className="nav-link" onClick={() => handleNavigation("helpcenter")}>
                  <MdOutlineHelpOutline /> Help Center
                </Link>
              </li>
            </ul>
          </motion.nav>
     
      </>
    );
  };
  
  export default SidebarNav;
