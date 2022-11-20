import React, { useState } from 'react';
import "./TicTacToe.css";

const TicTacToe = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    let score = 0;

    const checkWin = (squares) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnal: [
                [0,4,8],
                [2,4,6]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0] === ''] || 
                    squares[pattern[1] === ''] || 
                    squares[pattern[2] === '']
                ) {
                    return;
                }
                else if (
                    squares[pattern[0]] === squares[pattern[1]] && 
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            })
        }
    }

    const playerInput = (num) => {
        if (cells[num] !== '') {
            alert('already clicked');
            return;
        }
        let squares = [...cells];
        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }

        //Remember square selection
        checkWin(squares);
        setCells(squares);
        //console.log(squares);
    };

    //Reset board
    const restartGame = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }

    const Cell = ({ num }) => {
        return <td onClick={() => playerInput(num)}>{ cells[num] } </td>
    };
    return (
        <div className = 'game'>
            <table>
                <div>Turn: {turn}</div>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
                <div>
                    <p>{winner} is the winner!</p>
                    <button onClick={() => restartGame()}>Play Again?</button>
                </div>
            )}
        </div>
    )
}

export default TicTacToe;