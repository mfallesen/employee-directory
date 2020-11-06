import React, { Component } from 'react'
import EmployeeCards from '../EmployeeCards/EmployeeCards';
import "./EmployeeTable.css"
import API from "../../utils/API.js"



export default class EmployeeTable extends Component {

    state = {
        results: []
      };
    
      componentDidMount() {
        this.getRandomEmployees();
        // console.log(this.state.results);
      }
    
      componentDidUpdate() {
          console.log(this.state.results);
      }

      getRandomEmployees = () => {
        API.getRandomUserSet().then(res => { 
            console.log(res); 
            this.setState({ results: res.data.results})})
      }

      

    render() {
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
                        {this.state.results.map(element => (

                            
                            <EmployeeCards
                            picture={element.picture.thumbnail}
                            first={element.name.first}
                            last={element.name.last}
                            email={element.email}
                            phone={element.phone}
                            age={element.dob.age}
                            />
                            ))};

                    </tbody>

                </table>
            </div>
        )
    }
}
