import React, { Component } from "react"
import './App.css';
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import SearchBar from "./components/SearchBar/SearchBar";
import SiteHeader from "./components/SiteHeader/SiteHeader";
// import API from "../src/utils/API.js"


class App extends Component {
  // state = {
  //   results: []
  // };

  // componentDidMount() {
  //   this.getRandomEmployees();
  // }

  // getRandomEmployees = () => {
  //   API.getRandomUserSet().then(res => this.setState({ results: res.data.data }))
  // }


  render() {
    return (
      <div className="App">
        <SiteHeader></SiteHeader>
        <SearchBar></SearchBar>
        <EmployeeTable></EmployeeTable>
      </div>
    );
  }
}

export default App;
