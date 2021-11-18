import React,{ Component } from "react";
import Social from '../Component/Social';
import profilepic from '../img/profile.jpg'

class Home extends Component {
    render(){
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className='profilepic' />
                <p>I'm a web devloper.</p>
                <Social />
            </div>
        )
    }
}

export default Home;