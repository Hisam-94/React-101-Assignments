import logo from './logo.svg';
import './App.css';
import Logo from "./Components/Logo"
import Links from "./Components/Links"
import Button from "./Components/Button"

function App() {
  return (
     <navbar className="navbar">
       <Logo></Logo>
       <Links></Links>
       <Button></Button>       
     </navbar>    
   
  );
}

export default App;
