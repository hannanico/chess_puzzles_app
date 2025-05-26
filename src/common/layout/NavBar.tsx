export default function NavBar() {
    return  <div className="w-full lg:w-64 bg-gray-800 text-white p-4">
      <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4">
        <div className="flex items-center gap-2 ">
        <img src="public\favicon.ico" alt="logo" />
        <h1 className="text-xl font-bold">Chess App</h1>
        </div>
        <nav>
          <ul className="flex flex-row lg:flex-col gap-4 lg:gap-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/puzzles" className="hover:text-gray-300">Puzzles</a></li>
            <li><a href="/posts" className="hover:text-gray-300">Posts</a></li>
            <li><a href="/" className="hover:text-gray-300">User</a></li>
          </ul>
        </nav>
      </div>
    </div>
}