import { Trash } from 'lucide-react'

export function Todos() {
  return (
    <div className="flex h-8 flex-row items-center justify-between  border-2">
      <div className="w-full border-r-2 ">
        <p className="px-2 text-left">asdasdasdasdasdasdasd</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <label htmlFor="isPublic" className="flex items-center justify-center">
          <input
            type="checkbox"
            name="done"
            id="done"
            value="true"
            className="h-5 w-8 rounded  border-gray-400 bg-gray-700 px-5 text-purple-500"
          />
        </label>
        <a href="" className="rounded-md bg-red-600">
          <Trash />
        </a>
      </div>
    </div>
  )
}
