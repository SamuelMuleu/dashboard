import { PageContainer, Container, Title, Option, Button } from "./Settings.styles";

const Settings = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Settings</Title>
        <Option>
          <label htmlFor="darkMode">Enable Dark Mode</label>
          <input type="checkbox" id="darkMode" />
        </Option>
        <Option>
          <label htmlFor="notifications">Enable Notifications</label>
          <input type="checkbox" id="notifications" />
        </Option>
        <Button>Save Settings</Button>
      </Container>
    </PageContainer>
  );
};

export default Settings;