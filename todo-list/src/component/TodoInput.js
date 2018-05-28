import React, { Component } from 'react';

class TodoInput extends Component{

    state = {
        todoInput : ''
    }

    handleChange = (e) => {
        this.setState({
            todoInput : e.target.value
        });
    }

    render(){

        return(
            <div>
                <input
                    value={this.state.todoInput}
                    onChange={this.handleChange}
                    name="todoInput"
                    placeholder="Todo List"
                />
            </div>
        )
    }

}
export default TodoInput;