import { MainMenu } from './components/main-menu/main-menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MilestonesList } from './pages/milestones/milestones-list';
import { CreateMilestone } from './pages/milestones/create-milestone';
import { UsersList } from './pages/users/users-list';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0 }}>
          <MainMenu />
        </Header>
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<MilestonesList />} />
            <Route path="/all-milestones" element={<MilestonesList />} />
            <Route path="/create-milestone" element={<CreateMilestone />} />
            <Route path="/users" element={<UsersList />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
