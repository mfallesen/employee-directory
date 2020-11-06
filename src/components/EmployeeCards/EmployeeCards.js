import React from 'react'

export default function EmployeeCards(props) {
    return (

        <tr>
           
            <td><img src={props.picture}></img></td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.dob}</td>

        </tr>

    )
}

