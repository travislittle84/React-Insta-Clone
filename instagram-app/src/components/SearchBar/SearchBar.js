import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-header">
            <span id="logo-item"><i className="fab fa-instagram"></i>  |  <span id="logo-text">Instagram</span></span>
            <input type="textbox" placeholder="Search"/>
            
                <i className="far fa-compass"></i><i className="far fa-heart"></i><i className="far fa-user"></i>
            
        </div>
    );
}

export default SearchBar;