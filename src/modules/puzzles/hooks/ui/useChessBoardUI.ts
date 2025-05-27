import type { BoardOrientation } from "react-chessboard/dist/chessboard/types"

export function useChessBoardUI(orientation: BoardOrientation) {
    return {
        boardOrientation: orientation,
        boardWidth: 700,
        customDarkSquareStyle:{ backgroundColor: '#7397AC' },
        customLightSquareStyle:{ backgroundColor:'#D9E5E9'},
        animationDuration: 300,
        showBoardNotation: true,
    }
}