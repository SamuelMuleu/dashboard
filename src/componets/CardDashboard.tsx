import { Avatar, Button } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  CardsContainer,
  Card,
  Name,
  ProfileContainer,
  ProfileStatuContainer,
  DetailsContent,
} from "./CardDashboars.styles";

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    bs: string;
  };
}

interface EmployeeCardProps {
  employee: Employee;
  loading: boolean;
}

const CardDashboard = ({ employee, loading }: EmployeeCardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Button variant="contained" color="primary">
          download Info
        </Button>
        <h3>Employee Details</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <CardsContainer>
              <ProfileContainer>
                <Avatar
                  src={`https://i.pravatar.cc/150?img=${employee.id}`}
                  sx={{ width: 100, height: 100 }}
                />

                <Name>{employee.name}</Name>
              </ProfileContainer>
              <ProfileStatuContainer>
                <DetailsContent>
                  <p>Role</p>
                  <div> {employee.company.bs}</div>
                </DetailsContent>
                <DetailsContent>
                  <p>Phone Number</p>
                  <div> {employee.phone.split("x")[0]}</div>
                </DetailsContent>
                <DetailsContent>
                  <p>Email Adress </p>
                  <div>{employee.email}</div>
                </DetailsContent>
              </ProfileStatuContainer>
              <div>
                <Card>
                  <p>Total Attendance 309</p>
                </Card>
                <Card>
                  <p>Average Check-In Time 08:46</p>
                </Card>
                <Card>
                  <p>Average Check-Out Time 17:04</p>
                </Card>
                <Card>
                  <p>Employee Predicate Role Model</p>
                </Card>
              </div>
            </CardsContainer>
          </div>
        )}
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardDashboard;
