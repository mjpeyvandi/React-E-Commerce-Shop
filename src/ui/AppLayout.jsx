import React, { useState } from 'react'

import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const AppLayout = ({children}) => {
  const [Modal, setOp] = useState(false)
  return (
    <div className='w-full h-auto'>
        <header className='container bg-white mx-auto'>
            <Navbar setOp={setOp}/>
        </header>

        <main className={`${Modal ? 'opacity-10' : ''}`}>
            {children}
        </main>

        <footer className={`${Modal ? 'opacity-10' : ''}`}>
            <Footer/>
        </footer>
    </div>
  )
}
