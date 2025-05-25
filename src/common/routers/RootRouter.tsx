import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import Home from "../pages/Home";
import PostRouter from "../../modules/posts/routers/PostRouter";
import PuzzleRouter from "../../modules/puzzles/routers/PuzzleRouter";

export default function RootRouter() {
 return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts/*" element={<PostRouter/>} />
        <Route path="/puzzles/*" element={<PuzzleRouter/>} />

        <Route path="*" element={<NotFound404 />} />
    </Routes>
 </BrowserRouter>
}