import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import ShowBlogs from './component/allUsers.js/users';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShowBlogs/>
     <h1>all component</h1>
    </div>
  );
}

export default App;
