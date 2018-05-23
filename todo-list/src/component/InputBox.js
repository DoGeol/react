import React, { Component } from 'react';

class InputBox extends Component{

    state = {
        todoList : ''
    }

    render(){
        return(
            <div>
                <input
                    value={this.state.todoList}
                    name="todoList"
                    placeholder="Todo List"
                />
            </div>
        )
    }

}
export default InputBox;