import { Route, Routes } from "react-router-dom";
import NotFound404 from "../../../common/pages/NotFound404";
import MainFeed from "../pages/MainFeed";

export default function PuzzleRouter(){
    return (
        <Routes>
            <Route path="/" element={<h1>Select yout gamemode</h1>} />
            <Route path="/random" element={<MainFeed/>} />
            <Route path="*" element={<NotFound404/>} />
        </Routes>
    )
}