import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'




class Navbar extends React.Component {
    render() {
        return (
            <>
                <ul className="Nav-header">
                    <li><NavLink activeClassName="active" exact to='/'><img className="logo" src="https://media.glassdoor.com/sqll/3411/monster-worldwide-squarelogo-1439837319741.png" alt="" /></NavLink></li>
                    <li className="Nav-list"><NavLink activeClassName="active" to='/Contact'>Contact</NavLink></li>
                    <li className="Nav-list"><NavLink activeClassName="active" to='/MonsterList'>MonsterList</NavLink></li>
                    <li className="Nav-list"><NavLink activeClassName="active" to='/Summoning'>Summoning</NavLink></li>
                </ul>
            </>
        )
    }
}

export default Navbar
