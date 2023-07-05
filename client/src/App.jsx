import axios from 'axios'
import { UserContextProvider } from './component/UserContext';
import Routes from './pages/Routes';

function App() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
