import React from 'react';
import {start} from "../utils/Utils";



const End = (props) => {

    const getResult = () =>{
        if(props.playerWin > props.compWin){
            return 'Win'
        }
        if(props.playerWin < props.compWin){
            return 'Lose'
        }
        return 'Draw'
    }

    return (
        <div>
         <h1>{getResult()}</h1>
         <h2> {props.playerWin} - {props.compWin}</h2>
         <button onClick={() => props.changePage(start)}>Agaig?</button>
        </div>
    );
};

export default End;