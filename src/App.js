
import './App.css';

import React, {Component} from 'react';

import Start from "./components/Start";
import Game from "./components/Game";
import End from "./components/End";
import {game, result} from "./utils/Utils";

export const UserContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         nowState : 'start',
         name: 'You',
         compWin: 0,
         playerWin:0
     }
    }

     changeActivePage = nowState => {
        this.setState({nowState});
    }
     changeName = name => {
      name = name || this.state.name;
      this.setState({name});
    }
     changeCount = (compWin, playerWin) => {
      this.setState({compWin, playerWin});
    }




    render() {
            switch (this.state.nowState) {
                case game:
                    return <Game changePage={this.changeActivePage} changeCount={this.changeCount} name={this.state.name}/>
                case result:
                    return <End changePage={this.changeActivePage} compWin={this.state.compWin} playerWin={this.state.playerWin}/>
                default:
                    return <Start changePage={this.changeActivePage} changeName={this.changeName}/>
            }
        }
}

export default App;