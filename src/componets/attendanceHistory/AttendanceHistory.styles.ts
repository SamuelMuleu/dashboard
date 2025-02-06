import { FormControl } from "@mui/material";
import styled from "styled-components";
import { CardProps } from "../../types/cards";

export const AttendanceHistoryContainer = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 30rem;
  width: 100%;
  max-width: 64.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    max-width: 66.5rem;
    width: 90%; 
    overflow-x: hidden;
  }

  @media (max-width: 500px) {
    width: 90%; 
  }
`;

export const Header = styled.h1`
  margin-left: 2rem;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 20px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .status {
    font-size: 0.85rem;
    font-weight: bold;
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
    display: inline-block;
  }

  .onTime {
    background: #3c615a;
    color: rgb(21, 233, 42);
  }

  .late {
    background: ${({ theme }) => theme.colors.primaryGray};
    color: rgb(222, 246, 3);
  }

  .absent {
    background: ${({ theme }) => theme.colors.primaryGray};
    color: white;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ClockContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.3rem;
`;

export const Status = styled.div`
  margin-left: 6rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    opacity: 0.7;
  }

  p {
    font-weight: 500;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const FilterControl = styled(FormControl)`
  .MuiInputBase-root {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
  }
`;