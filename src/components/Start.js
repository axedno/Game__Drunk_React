
import React, {Component} from 'react';
import {game} from "../utils/Utils";

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div>
                <h1>Ready for war</h1>
                <input onChange={e => this.setState({name: e.target.value})}
                       value={this.state.name.toUpperCase()}
                       type="text"
                       placeholder='Enter your name'/>
                <button onClick={() =>{
                           this.props.changePage(game);
                           this.props.changeName(this.state.name.trim().toUpperCase());
                }}>Start</button>
            </div>
        );
    }
}

export default Start;




