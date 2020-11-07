import React, { useState, useEffect } from "react"
import './App.css';
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import SearchBar from "./components/SearchBar/SearchBar";
import SiteHeader from "./components/SiteHeader/SiteHeader";
// import API from "../src/utils/API.js"


function App() {


  const [searchState, setSearchState] = useState("")

  useEffect(() => {
    
  })
  



  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <SearchBar handleSetSearchState={setSearchState} handleSearchState={searchState}></SearchBar>
      <EmployeeTable handleSearchState={searchState}></EmployeeTable>
    </div>
  );

}

export default App;
