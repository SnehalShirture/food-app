import './App.css';
import MyLoginForm from './Components/MyLoginForm';
import MyOffCan from './Components/MyOffCan';
import MyRegistrationFrom from './Components/MyRegistrationFrom';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Myroutes from './Myroutes';

function App() {
  return (
    <div>
      <Myroutes/>
      {/* <MyNavbar/>
      <MyRegistrationFrom/>
      <MyLoginForm/>
      <MyOffCan/> */}
      
    </div>
  );
}

export default App;
