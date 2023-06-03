import { User } from 'lucide-react'

export function SingIn() {
  return (
    <a
      href=""
      className="flex items-center gap-3 px-4 py-3 text-left transition-colors hover:text-gray-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full  bg-gray-400">
        <User className="h-5 text-gray-500" />
      </div>
      <p className="max-w-[140] text-sm leading-snug">
        <span className="underline">Crie sua conta</span>
      </p>
    </a>
  )
}
