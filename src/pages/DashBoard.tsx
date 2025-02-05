import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import {
  Container,
  Sidebar,
  Header,
  MainContent,
 
  SearchContainer,
  AvatarContainer,
  EmployeeDetailsCard,

} from "./DashBoard.styles";

import {
  FaAngleDown,
  FaTachometerAlt,
  FaChartLine,
  FaCalendarAlt,
  FaUsers,
  FaBell,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import CardDashboard from "../componets/CardDashboard";
import { CardsContainer, StyledCard, StyledCardContent } from "../componets/CardDashboars.styles";
import AttendanceHistory from "../componets/AttendanceHistory";


interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    bs: string;
  };
}

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Sidebar>
        <h2>Findez</h2>
        <nav>
          <div>MAIN MENU</div>
          <ul>
            <li>
              <FaTachometerAlt /> Dashboard
            </li>
            <li>
              <FaChartLine /> Analytics <FaAngleDown />
            </li>
            <li>
              <FaCalendarAlt /> Schedule
            </li>
            <li>
              <FaUsers /> Members
            </li>
            <li>
              <FaBell /> Notifications
            </li>
          </ul>
        </nav>
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
          <Avatar src="https://randomuser.me/api/portraits/men/5.jpg" />
          <AvatarContainer>
            <div>Samuel Muleu</div>
            <span>samuel@findez.com</span>
          </AvatarContainer>
        </Header>

        <EmployeeDetailsCard>
          <StyledCard>
          <StyledCardContent>

 
    
      {users.slice(0, 1).map((user) => (
        <div key={user.id}>
       
          <CardsContainer>
   
            <CardsContainer>
            {users.length > 0 && <CardDashboard employee={users[0]} loading={loading} />}
          
          </CardsContainer>
          </CardsContainer>
        </div>
      ))}
   

</StyledCardContent>

          </StyledCard>
        </EmployeeDetailsCard>

        <AttendanceHistory/>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
