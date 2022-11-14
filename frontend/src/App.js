import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  async function getTeams() {
    const response = await fetch('[https://cs3219-b.de.r.appspot.com/api/footballTeams', { method: 'GET' });
    const data = await response.json();
    console.log(data);
  }
  getTeams();
}


export default App;
  