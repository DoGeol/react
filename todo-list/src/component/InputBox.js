import React, { Component } from 'react';

class InputBox extends Component{

    state = {
        todoInput : ''
    }

    handleCommit = (e) => {
        
    }

    render(){
        console.log(this.props.insertData);
        return(
            <div>
                <input
                    value={this.state.todoInput}
                    name="todoInput"
                    placeholder="Todo List"
                />
            </div>
        )
    }

}
export default InputBox;