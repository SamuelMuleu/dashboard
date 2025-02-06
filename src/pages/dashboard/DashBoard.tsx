import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Container,
  Sidebar,
  Header,
  MainContent,
  SearchContainer,
  AvatarContainer,
  UserInfo,
  EmployeeDetailsCard,
} from "./DashBoard.styles";

import {
  FaAngleDown,
  FaTachometerAlt,
  FaChartLine,
  FaCalendarAlt,
  FaUsers,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import { RiSettings4Fill } from "react-icons/ri";
import { MdOutlineHelpOutline } from "react-icons/md";
import Settings from "../../componets/settings/Settings";
import {
  CardsContainer,
  StyledCard,
  StyledCardContent,
} from "../../componets/cardDashboard/CardDashboards.styles";
import AttendanceHistory from "../../componets/attendanceHistory/AttendanceHistory";
import CardDashboard from "../../componets/cardDashboard/CardDashboard";


const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const navigate = useNavigate();

  const toggleLogoutMenu = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  const isActive = (component: string) => {
    return activeComponent === component ? "active" : "";
  };

  return (
    <Container>
      <Sidebar>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Findez
        </motion.h2>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>MAIN MENU</div>
          <ul>
            <motion.li
              className={isActive("dashboard")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("dashboard")}
              >
                <FaTachometerAlt /> Dashboard
              </Link>
            </motion.li>

            <motion.li
              className={isActive("analytics")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("analytics")}
              >
                <FaChartLine /> Analytics <FaAngleDown />
              </Link>
            </motion.li>

            <motion.li
              className={isActive("schedule")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("schedule")}
              >
                <FaCalendarAlt /> Schedule
              </Link>
            </motion.li>

            <motion.li
              className={isActive("members")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("members")}
              >
                <FaUsers /> Members
              </Link>
            </motion.li>

            <motion.li
              className={isActive("notifications")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("notifications")}
              >
                <FaBell /> Notifications
              </Link>
            </motion.li>
          </ul>

          <ul>
            <div>SETTINGS</div>

            <motion.li
              className={isActive("settings")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("settings")}
              >
                <RiSettings4Fill /> Settings
              </Link>
            </motion.li>

            <motion.li
              className={isActive("helpcenter")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => handleNavigation("helpcenter")}
              >
                <MdOutlineHelpOutline /> Help Center
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </Sidebar>

      <MainContent>
        <Header>
          <SearchContainer>
            {searchValue === "" && <IoSearch size={20} />}
            <input
              type="text"
              value={searchValue}
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </SearchContainer>
          <AvatarContainer>
            {users.length > 0 ? (
              <Avatar
                src={`https://i.pravatar.cc/150?img=${users[0].id}`}
                alt="Avatar"
              />
            ) : (
              <div>Loading...</div>
            )}

            <UserInfo>
              {users.length > 0 && <div>{users[0].name}</div>}
              <span>{users.length > 0 ? users[0].email : "Loading..."}</span>
            </UserInfo>
            <FaSignOutAlt onClick={toggleLogoutMenu} size={20} />
          </AvatarContainer>
        </Header>

        {activeComponent === "settings" ? (
          <Settings />
        ) : (
          <>
            <EmployeeDetailsCard>
              <StyledCard>
                <StyledCardContent>
                  {users.slice(0, 1).map((user) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <CardsContainer>
                        <CardsContainer>
                          {users.length > 0 && (
                            <CardDashboard
                              employee={users[0]}
                              loading={loading}
                            />
                          )}
                        </CardsContainer>
                      </CardsContainer>
                    </motion.div>
                  ))}
                </StyledCardContent>
              </StyledCard>
            </EmployeeDetailsCard>

            <AttendanceHistory />
          </>
        )}
      </MainContent>
    </Container>
  );
};

export default Dashboard;
