import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
    </nav>
}