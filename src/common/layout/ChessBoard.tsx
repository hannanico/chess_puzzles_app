import { Chessboard } from 'react-chessboard';
import { useChessGame } from '../../modules/puzzles/hooks/useChessGame';
import { useChessBoardUI } from '../../modules/puzzles/hooks/ui/useChessBoardUI';

export default function ChessBoard(){
    const {position, makeMove, orientation} = useChessGame();
    const ui = useChessBoardUI(orientation);


    return( 
        <div>
        <Chessboard
        position={position}
        boardWidth={ui.boardWidth}
        boardOrientation={ui.boardOrientation}
        customDarkSquareStyle={ui.customDarkSquareStyle}
        customLightSquareStyle={ui.customLightSquareStyle}
        animationDuration={ui.animationDuration}
        showBoardNotation={ui.showBoardNotation}
        />
    </div>)
}