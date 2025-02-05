import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, Button, Card, CardContent } from "@mui/material";
import {
  Container,
  Sidebar,
  Header,
  MainContent,
  AttendanceTable,
  SearchContainer,
  AvatarContainer,
  EmployeeDetailsCard,
  AttendanceHistoryCard
} from "./DashBoard.styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FaAngleDown, FaTachometerAlt, FaChartLine, FaCalendarAlt, FaUsers, FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
        setLoading(false);
      });
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
          <Card>
            <CardContent>
              <h3>Employee Details</h3>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                users.slice(0, 1).map((user) => (
                  <div key={user.id}>
                    <Avatar src={`https://i.pravatar.cc/150?img=${user.id}`} />
                    <p>Name: {user.name}</p>
                    <p>Role: {user.company.bs}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Email: {user.email}</p>
                    <p>Total Attendance: 309</p>
                    <p>Average Check-In Time: 08:46</p>
                    <p>Average Check-Out Time: 17:04</p>
                    <p>Employee Predicate: Role Model</p>
                    <Button variant="contained" color="success">
                      Download Info
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </EmployeeDetailsCard>

        <AttendanceHistoryCard>
          <AttendanceTable>
            <TableContainer component={Paper} sx={{ background: "#25253a", borderRadius: "8px" }}>
              <h3>Attendance History</h3>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Date</TableCell>
                    <TableCell sx={{ color: "white" }}>Check-In</TableCell>
                    <TableCell sx={{ color: "white" }}>Check-Out</TableCell>
                    <TableCell sx={{ color: "white" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} sx={{ color: "white" }}>
                        Carregando...
                      </TableCell>
                    </TableRow>
                  ) : (
                    users.slice(0, 5).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell sx={{ color: "white" }}>March 08, 2023</TableCell>
                        <TableCell sx={{ color: "white" }}>08:53</TableCell>
                        <TableCell sx={{ color: "white" }}>17:15</TableCell>
                        <TableCell sx={{ color: "white" }}>On Time</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </AttendanceTable>
        </AttendanceHistoryCard>
      </MainContent>
    </Container>
  );
};

export default Dashboard;