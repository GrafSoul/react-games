import React from 'react';
import RPSGame from './RPSGame/RPSGame';

function App() {
    return (
        <>
            <header>
                <h1>Old Super Games</h1>
            </header>

            <main>
                <RPSGame />
            </main>

            <footer>
                <p className="copyright">
                    © Old Super Games | 2020 | Created by Dmitriy Zatulovskiy{' '}
                </p>
            </footer>
        </>
    );
}

export default App;
