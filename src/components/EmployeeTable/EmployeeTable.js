import React from 'react';
import EmployeeCards from '../EmployeeCards/EmployeeCards';
import "./EmployeeTable.css"

export default function EmployeeTable(props) {
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
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                <EmployeeCards
            picture={"pic"}
            first={"first"}
            last={"last"}
            email={"email"}
            phone={"phone"}
            dob={"dob"}
            />

                </tbody>
               
            </table>
        </div>
    )
}
