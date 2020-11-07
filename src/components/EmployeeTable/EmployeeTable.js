import React, { Component } from 'react'
import EmployeeCards from '../EmployeeCards/EmployeeCards';
import "./EmployeeTable.css"
import API from "../../utils/API.js"



export default class EmployeeTable extends Component {

    state = {
        results: [],
        filteredResults: []
      };
    
      handleSetFilter(filteredText) {
        let filteredResults = this.state.results.filter(employee => {
            return employee.name.first.includes(filteredText)
        })
        this.setState({filteredResults: filteredResults})
      }

      componentDidMount() {
        this.getRandomEmployees();
        // console.log(this.state.results);
      }
    
      componentDidUpdate(prevProps, prevState) {
          console.log("updated",this.state);
          if (prevProps.handleSearchState !== this.props.handleSearchState || prevState.results !== this.state.results) {
              this.handleSetFilter(this.props.handleSearchState);
            console.log("How Often?");
          }
          console.log(this.state.filteredResults);
      }

      getRandomEmployees = () => {
        API.getRandomUserSet().then(res => { 
            this.setState({ results: res.data.results})})
      }

      

    render() {

        let employeeList = this.state.filteredResults.length !== 0 ? this.state.filteredResults : []
        console.log(employeeList);
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { employeeList.map(element => (

                            
                            <EmployeeCards
                            picture={element.picture.thumbnail}
                            first={element.name.first}
                            last={element.name.last}
                            email={element.email}
                            phone={element.phone}
                            age={element.dob.age}
                            />
                            ))}

                    </tbody>

                </table>
            </div>
        )
    }
}
