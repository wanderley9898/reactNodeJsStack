import { NewTodoForm } from '@/components/NewTodoForm'
import { SingIn } from '@/components/SingIn'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="relative flex min-h-screen flex-col items-start justify-between border-r bg-cover">
          <SingIn />

          <div className="flex h-[45rem] w-2/4 flex-col self-center rounded-lg border">
            <NewTodoForm />
            {children}
          </div>
          <div>coprit</div>
        </main>
      </body>
    </html>
  )
}
