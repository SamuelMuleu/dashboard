import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

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

import { FaSignOutAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";

import Settings from "../../componets/settings/Settings";
import {
  CardsContainer,
  StyledCard,
  StyledCardContent,
} from "../../componets/cardDashboard/CardDashboards.styles";
import AttendanceHistory from "../../componets/attendanceHistory/AttendanceHistory";
import CardDashboard from "../../componets/cardDashboard/CardDashboard";
import SidebarNav from "../../componets/sidebard/sidebar";

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

        <SidebarNav
          activeComponent={activeComponent}
          handleNavigation={handleNavigation}
        />
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
