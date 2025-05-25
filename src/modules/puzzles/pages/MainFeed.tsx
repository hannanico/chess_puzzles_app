import MainLayout from "../../../common/layout/MainLayout";
import Puzzles from "../components/Puzzles";
import useSupabase from "../hooks/puzzlePuzzles";

export default function MainFeed(){
    const puzzles = useSupabase();

    return (
    <MainLayout>
        <main>
            <h1>All Puzzles</h1>
            {puzzles && <Puzzles puzzles={puzzles} />}
        </main>
        </MainLayout>
    );
}