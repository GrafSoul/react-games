import React from 'react';
import RPSGame from './RPSGame/RPSGame';

function App() {
    return (
        <>
            <header></header>

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
