import { Avatar, Button, FormControl, MenuItem, Select } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  CardsContainer,
  Card,
  Name,
  ProfileContainer,
  ProfileStatuContainer,
  DetailsContent,
  CardsDownContainer,
  IconWrapper,
  NumberCard,
  TimeFilter,
  ButtonsContainer,
} from "./CardDashboards.styles";
import { BiSolidDownload } from "react-icons/bi";
import { EmployeeCardProps } from "../../types/employee";

import { FiLogIn, FiClock, FiUser } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";
import { useState } from "react";

const CardDashboard = ({ employee, loading }: EmployeeCardProps) => {
  const [timeFilter, setTimeFilter] = useState("thisYear");
  return (
    <StyledCard>
      <StyledCardContent>
        <ButtonsContainer>
          <TimeFilter>
            <FormControl size="small">
              <Select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                displayEmpty
                sx={{
                  color: "white",
                  border: " 1px solid white",
                  opacity: 0.7,
                }}
              >
                <MenuItem value="thisYear">This Year</MenuItem>
                <MenuItem value="thisMonth">This Month</MenuItem>
                <MenuItem value="thisWeek">This Week</MenuItem>
              </Select>
            </FormControl>
          </TimeFilter>

          <Button variant="contained">
            <BiSolidDownload />
            Download Info
          </Button>
        </ButtonsContainer>

        <h3>Employee Details</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <CardsContainer>
              <ProfileContainer>
                <Avatar
                  src={`https://i.pravatar.cc/150?img=${employee.id}`}
                  sx={{ width: 100, height: 100, marginLeft: "1rem" }}
                />

                <Name>{employee.name}</Name>
              </ProfileContainer>
              <ProfileStatuContainer>
                <DetailsContent>
                  <p>Role</p>
                  <div> {employee.company.bs.split("-")[0]}</div>
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
              <CardsDownContainer>
                <Card>
                  <IconWrapper>
                    <FiLogIn size={24} />
                  </IconWrapper>

                  <div>
                    <NumberCard>309</NumberCard>
                    <p>Total Attendance </p>
                  </div>
                </Card>
                <Card>
                  <IconWrapper>
                    <FiClock size={24} />
                  </IconWrapper>

                <div>
                    <NumberCard> 08:46</NumberCard>
                    <p>Average Check-In Time</p>
                  </div>
                </Card>
                <Card>
                  <IconWrapper>
                    <FiUser size={24} />
                  </IconWrapper>
                  <div>
                    <NumberCard>17:04</NumberCard>
                    <p>Average Check-Out Time </p>
                  </div>
                </Card>
                <Card>
                  <IconWrapper>
                    <PiMedal size={24} />
                  </IconWrapper>

                  <div>
                    <NumberCard> Role Model</NumberCard>
                    <p>Employee Predicate</p>
                  </div>
                </Card>
              </CardsDownContainer>
            </CardsContainer>
          </div>
        )}
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardDashboard;
