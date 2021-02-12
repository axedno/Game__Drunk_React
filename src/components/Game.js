
import React, {Component} from 'react';
import {convertRank, result, shuffle, sort} from "../utils/Utils";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerCard : 'Player card',
            compCard: 'Comp card',


         };
            this.compCards = [{rank: 3, suit: 'spade'}, {rank: 6, suit: 'heart'}];
            this.playerCards = [{rank: 4, suit: 'club'}, {rank: 5 , suit: 'diamond'}];
            this.compWin = 0;
            this.playerWin = 0;

    }


    handleClickNext = () => {
        if(this.compCards.length) {
            const comp = this.compCards.pop();
            const player = this.playerCards.pop();
            if( player.rank > comp.rank){
                this.playerWin++
            }
            if(player.rank < comp.rank){
                this.compWin++
            }
            this.setState(
                {
                    playerCard: convertRank(player.rank, player.suit),
                    compCard: convertRank(comp.rank, comp.suit)
            })

        } else {
            this.props.changeCount(this.compWin, this.playerWin);
            this.props.changePage(result);
        }
    }
    componentDidMount() {
        const shuffleDeck = shuffle(sort);
        this.compCards = shuffleDeck.slice(0, sort.length / 2);
        this.playerCards = shuffleDeck.slice(sort.length / 2, sort.length);
    }

    render() {
        return (
            <div>
                <h1>Computer</h1>
                <h2>{this.state.compCard}</h2>
                <h2>{this.state.playerCard}</h2>
                <h1>{this.props.name}</h1>
                <button onClick={this.handleClickNext}>Next</button>
            </div>
        );
    }
}

export default Game;
