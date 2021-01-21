import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; 

import Navbar from "./components/navbar.component"; 
import ListQuestions from "./components/listQuestions.component"; 


function App() {
  return (
    <Router>
      <div className="container">       
      <Navbar />
      <br/>
      <Route path="/" exact component={ListQuestions} /> 
      {/* <Route path="/edit/:id" exact component={EditExercise} />  */}
      </div>

    </Router>
  );
}

export default App;
