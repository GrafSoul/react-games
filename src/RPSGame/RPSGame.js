import React, { useState, useEffect } from 'react';

function RPSGame() {
    const [userSelect, setUserSelect] = useState('');
    const [computerSelect, setComputerSelect] = useState('');
    const [results, setResults] = useState('');
    const [isReload, setIsReload] = useState(false);
    const [userCount, setUserCount] = useState(0);
    const [computerCount, setComputerCount] = useState(0);

    useEffect(() => {
        handleResults(); // eslint-disable-next-line
    }, [userSelect]);

    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

    const handleSelect = (select) => {
        let randomNumber = randomInteger(1, 3);
        setUserSelect(select.toLowerCase());
        generatedComputerChoice(randomNumber);
        setIsReload(true);
    };

    const imageSelect = (select) => {
        let url = `/images/rpsgame/${select}_image.png`;
        return <img src={url} alt={select} />;
    };

    const generatedComputerChoice = (num) => {
        if (num === 1) {
            setComputerSelect('rock');
        } else if (num === 2) {
            setComputerSelect('paper');
        } else if (num === 3) {
            setComputerSelect('scissors');
        }
    };

    const handleResults = () => {
        if (computerSelect !== '' && userSelect !== '') {
            if (computerSelect === userSelect) {
                setResults('There was a tie');
            } else if (computerSelect === 'rock' && userSelect === 'paper') {
                setResults('You Lost...');
                setComputerCount(computerCount + 1);
            } else if (computerSelect === 'rock' && userSelect === 'scissors') {
                setResults('You Win!');
                setUserCount(userCount + 1);
            } else if (computerSelect === 'paper' && userSelect === 'rock') {
                setResults('You Lost...');
                setComputerCount(computerCount + 1);
            } else if (
                computerSelect === 'paper' &&
                userSelect === 'scissors'
            ) {
                setResults('You Win!');
                setUserCount(userCount + 1);
            } else if (computerSelect === 'scissors' && userSelect === 'rock') {
                setResults('You Win!');
                setUserCount(userCount + 1);
            } else if (
                computerSelect === 'scissors' &&
                userSelect === 'paper'
            ) {
                setResults('You Lost...');
                setComputerCount(computerCount + 1);
            }
        }
    };

    const handleReload = () => {
        setComputerSelect('');
        setUserSelect('');
        setResults('');
        setIsReload(false);
    };

    return (
        <div className="rpsgame">
            <h3>Rock, Paper, Scissors</h3>
            <div className="rpsgame-choice">
                <div className="rpsgame-choice__computer">
                    <h2>You: {userCount}</h2>
                    <span
                        className="rpsgame-choice__image"
                        id="computer-choice"
                    >
                        {userSelect === '' ? '?' : imageSelect(userSelect)}
                    </span>
                </div>

                <div className="rpsgame-choice__user">
                    <h2>Computer: {computerCount}</h2>
                    <span className="rpsgame-choice__image" id="user-choice">
                        {computerSelect === ''
                            ? '?'
                            : imageSelect(computerSelect)}
                    </span>
                </div>
            </div>

            <div className="result">
                {results && (
                    <>
                        <h2>Result</h2>
                        <span className="result__text">{results}</span>
                    </>
                )}
            </div>

            <div className="btn-group">
                {!isReload ? (
                    <>
                        <button
                            className="btn"
                            onClick={() => handleSelect('Rock')}
                        >
                            Rock
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleSelect('Paper')}
                        >
                            Paper
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleSelect('Scissors')}
                        >
                            Scissors
                        </button>
                    </>
                ) : (
                    <button className="btn reload" onClick={handleReload}>
                        Reload
                    </button>
                )}
            </div>
        </div>
    );
}

export default RPSGame;
