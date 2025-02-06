import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/dashboard/DashBoard";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
