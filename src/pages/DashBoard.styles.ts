import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  color: white;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background: black;
  color: #27282c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: .7rem;
div{
  font-size: small;
}
  h2 {
color: white;
font-size: larger;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav ul li {
    padding: 10px 0;
    cursor: pointer;
        display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transition: 0.3s;
  }

  nav ul li:hover {
    color: #4caf50;
    background:#27282c ;
    border-radius: .6rem;
  }

`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 10px;
  border-radius: 8px;


  input {
    width: 50%;

    border: none;
    border-radius: 5px;
    background: #27282c;
  }

  
`;

export const Metrics = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;

  div {
    background: #27282c;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    flex: 1;
  }

`;


export const AttendanceTable = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px; 
   background:#27282c;

  table {
    width: 100%;
    border-collapse: collapse;
  
  }

  th, td {
    padding: 10px;
    background:#27282c;
    border-bottom: 1px solid #3a3a4f;
    text-align: left;
  }
h3,div{
    background:#27282c; 
    color : white;
    margin-left: 1rem;
}
`;
export const SearchContainer = styled.div`
  position: relative;
  width: 250px;

  input {
    width: 120%;
    padding: 10px 40px 10px 36px; 
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    color: white;
    font-size: 16px;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    cursor: pointer;
  }
`;
export const AvatarContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: -1rem;
margin-left: -34rem;
div{
  font-weight:900;
}
span{
opacity: 0.4;

}`
export const EmployeeDetailsCard = styled.div`
margin: 20px 0;
background-color: #1a1a2e;
border-radius: 8px;
padding: 20px;
color: white;
h3 {
  margin-bottom: 20px;
}
p {
  margin: 5px 0;
}
button {
  margin-top: 20px;
}
`;

export const AttendanceHistoryCard = styled.div`
margin: 20px 0;
background-color: #1a1a2e;
border-radius: 8px;
padding: 20px;
color: white;
h3 {
  margin-bottom: 20px;
}
table {
  width: 100%;
  thead {
    tr {
      th {
        color: white;
        font-weight: bold;
      }
    }
  }
  tbody {
    tr {
      td {
        color: white;
      }
    }
  }
}`

 
