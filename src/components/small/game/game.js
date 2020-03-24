import React from 'react';
import Canvas from './canvas';

import { useGlobal } from './gameState';

const Game = () => {

    let [gameState, setGameState] = useGlobal();

    return (
        <div>
            <Canvas/>
        </div>
    );

}
export default Game;


