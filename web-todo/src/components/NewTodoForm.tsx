import { Plus } from 'lucide-react'

export function NewTodoForm() {
  return (
    <>
      <form className=" flex w-full rounded-lg border-2 border-gray-900">
        <div className="flex w-full flex-row justify-between gap-1 ">
          <label htmlFor="description" className="flex-1">
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Adicione uma tarefa"
              className="h-full w-full rounded-md border bg-transparent px-1"
            />
          </label>
          <Plus className="h-8 w-8 rounded-md bg-blue-800 text-gray-950  " />
        </div>
      </form>
    </>
  )
}
