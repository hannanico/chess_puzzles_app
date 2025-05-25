import type { PuzzleType } from "../types/PuzzleTypes";

export default function Puzzles({ puzzles }: {puzzles: PuzzleType[]}) {
    return (
        <div>
            {puzzles.map((puzzle) => (
                <div key={puzzle.id}>
                    <h2>{puzzle.id}</h2>
                    <span>{puzzle.fen}</span>
                    <span>{puzzle.moves}</span>
                    <p>{puzzle.rating}</p>
                </div>
            ))}
        </div>
        )
}