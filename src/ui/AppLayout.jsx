import React, { useState } from 'react'
import { Navbar } from './Navbar'

export const AppLayout = ({children}) => {
  const [Modal, setOp] = useState(false)
  return (
    <div>
        <header className='container bg-white mx-auto'>
            <Navbar setOp={setOp}/>
        </header>

        <main className={`${Modal ? 'opacity-10' : ''}`}>
            {children}
        </main>

        <footer className={`${Modal ? 'opacity-10' : ''}`}>
            <p>footer</p>
        </footer>
    </div>
  )
}
