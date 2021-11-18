import React, { Component } from "react";

class Educard extends Component {
    render() {
        return (
            <div className="educard">
                <div className="edu">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.where}</h4>
                    <h4>{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Educard