import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg mt-3">
                <Link to='/'>DailyPlanner</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to='/' className="nav-link">Entries</Link>
                        </li>
                        <li>
                            <Link to='/create' className="nav-link">Create Entry Log</Link>
                        </li>
                        <li>
                            <Link to='/user' className="nav-link">Create User</Link>
                        </li>
                    </ul>                    
                </div>
            </nav>
        )
    }
}
