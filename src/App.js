import React from "react"
import "./App.css";
import Users from "./Components/Users";



class App extends React.Component {
  render() {

    return (
      <>
        <div className="App" data-test="App_Component">
          <Users />
        </div>
      </>
    );
  }
}

export default App;
