import React,{ Component } from 'react';
import Educard from '../Component/Educard';

class Education extends Component{
    render(){
        return (
            <div className="condiv">
                <h1 className="subtopic">Education</h1>
                <Educard title="Science-Math" where="Sarasas Witaed Romklao School" from="2015" to="2018" />
                <Educard title="Electronics Physics" where="Thammasat University" from="2018" to="2021" />
            </div>
        )
    }
}

export default Education;