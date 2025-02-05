import {
  AvatarGroup,
  Card,
  Container,
  Header,
  RightSide,
  RightTitle,
} from "./Login.styles";
import LoginForm from "../componets/LoginForm";
import { Avatar } from "@mui/material";
import Testimonials from "../componets/Testimonials";
import { motion } from "framer-motion";

const LoginPage = () => {

  return (
    <Container>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration:  2.2}}
      >
        <Header>Habu</Header>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 2.2 }}
      >
        <LoginForm />
      </motion.div>

      <RightSide>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration:  2.2 }}
        >
          <RightTitle>
            <p>
              What&apos;s our <br /> Jobseekers Said.
              <div>&ldquo;</div>
            </p>
          </RightTitle>
          <Testimonials />
        </motion.div>

        <Card>
          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration:  2.2 }}
          >
            Get your right job and right place apply now
          </motion.h4>
          <p>
            Be among the first founders to experience the easiest way to start
            run a business.
          </p>
          <AvatarGroup>
            <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar 1" />
            <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" alt="Avatar 2" />
            <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" alt="Avatar 3" />
            <Avatar src="https://randomuser.me/api/portraits/men/4.jpg" alt="Avatar 4" />
          </AvatarGroup>
        </Card>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
