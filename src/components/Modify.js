import React, {Component} from 'react';


class Modify extends Component{
    constructor() {                                      //Create constructor
        super();
    }
    render(){
        if (this.props.priority == 'low'){
            return (
                <span id="priorityColor" className="badge badge-pill badge-primary ml-2">
                {this.props.priority}
            </span>
            )
        }
        if (this.props.priority == 'medium'){
            return (
                <span id="priorityColor" className="badge badge-pill badge-warning ml-2">
                {this.props.priority}
            </span>
            )
        }
        if (this.props.priority == 'high'){
            return (
                <span id="priorityColor" className="badge badge-pill badge-danger ml-2">
                {this.props.priority}
            </span>
            )
        }

    }
}

export default Modify;