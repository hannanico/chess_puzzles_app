import { Route, Routes } from "react-router-dom";
import MainFeed from "../pages/MainFeed";
import NotFound404 from "../../../common/pages/NotFound404";

export default function PostRouter(){
    return (
        <Routes>
            <Route path="/" element={<MainFeed />} />

            <Route path="*" element={<NotFound404 />} />
        </Routes>
    )
}