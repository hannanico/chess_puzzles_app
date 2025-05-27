export function SideInfoBar(){
    return (
         <div className="w-full lg:w-64 bg-gray-800 text-white p-4 hidden lg:block">
      <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Puzzle Info</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p>Rating: 1500</p>
          <p>Attempts: 3</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            Hint
          </button>
        </div>
      </div>
    </div>
    )
}