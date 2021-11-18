import React, { Component } from 'react';
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            NavActive : ''
        }
    }

    activeItem = (item) => {
        if (this.state.NavActive.length > 0) {
            document.getElementById(this.state.NavActive).classList.remove('active');
        }
        this.setState({ 'NavActive': item }, () => {
            document.getElementById(this.state.NavActive).classList.add('active')
        })
    }

    render(){
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" navActive={this.activeItem}></Navitems>
                    <Navitems item="About Me" tolink="/about" navActive={this.activeItem}></Navitems>
                    <Navitems item="My Education" tolink="/education" navActive={this.activeItem}></Navitems>
                    <Navitems item="My Skills" tolink="/skills" navActive={this.activeItem}></Navitems>
                    <Navitems item="Get in Touch!" tolink="/contact" navActive={this.activeItem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;