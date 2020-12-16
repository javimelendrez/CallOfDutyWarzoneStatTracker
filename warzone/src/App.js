
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GamerTag } from './components'

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/javim1224/psn',
  headers: {
    'x-rapidapi-key': '366d011c92msh40d6527334090abp15e5cdjsn5aa2270f3b82',
    'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Call of Duty Warzone Stat Tracker!</h1>
      </Jumbotron>
      <GamerTag />
    </div>
  );
}

export default App;
