import React from 'react'
import { Navbar } from './Navbar'

export const AppLayout = ({children}) => {
  return (
    <div>
        <header className='container bg-star mx-auto'>
            <Navbar/>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <p>footer</p>
        </footer>
    </div>
  )
}
