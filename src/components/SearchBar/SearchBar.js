import React, { useState,useEffect } from "react";
import "./SearchBar.css"

export default function SearchBar(props) {


    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type={""} className="form-control" placeholder="Type to search by Employee First Name" ariaLabel="Example text with button addon" ariaDescribedby="button-addon1" onChange={event => props.handleSetSearchState(event.target.value)} value={props.handleSearchState}></input>
            </div>
        </div>
    )
}
