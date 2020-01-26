export function SearchBar({ onSortChange, onQueryChange }) {
  return (
    <div
      className="px-2"
      style={{
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        marginBottom: 50
      }}
    >
      <div className="flex">
        {/* <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          onChange={e => onQueryChange(e.target.value)}
          placeholder="Search"
        />
      </div> */}
        <div className="w-full lg:px-6 lg:w-3/4 xl:px-12">
          <div className="relative">
            <input
              id="docsearch"
              className="transition bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
              onChange={e => onQueryChange(e.target.value)}
              type="text"
              placeholder="Search"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={e => onSortChange(e.target.value)}
          >
            <option value="releavance">Releavance</option>
            <option value="newest">Newest</option>
            <option value="lowest_price">Lowest Price</option>
            <option value="highest_price">Highest Price</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
