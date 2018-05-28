import React, {Component} from 'react';

class TodoInfo extends Component{
    static defaultProps = {
        info : {
            todo : ''
        }
    };


    render() {
        return (
            {info}
        )
    }

}