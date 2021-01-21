import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to="/" className="navbar-brand">Quiz Manager</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">List Questions</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Question</Link>
                    </li>
                </ul> 
                </div>
            </nav> 


        );
    }
}