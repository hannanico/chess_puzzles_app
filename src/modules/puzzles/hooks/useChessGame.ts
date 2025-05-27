import {useMemo, useState} from 'react';
import {Chess} from 'chess.js';

export function useChessGame(fen?:string) {
    const [game] = useState(new Chess());
    const [position, setPosition] = useState(game.fen());

     const makeMove = (move: string) => {
    const result = game.move(move);
    if (result) setPosition(game.fen());
    return result;
  };

  const turn = useMemo(() => game.turn(), [position]); // 'w' or 'b'
  const orientation: 'white' | 'black' = turn === 'w' ? 'white' : 'black';

    return {game,
    position,
    makeMove,
    orientation,
    turn,
    };
}