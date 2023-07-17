import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import ShowUser from './component/allUsers.js/users';
import AllRoutes from './component/allRoutes/allRoutes';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AllRoutes/>
     <h1>all component</h1>
    </div>
  );
}

export default App;
