import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'

function App() {
  const [currentPage, setCurrentPage] = useState('hero')

  return (
    <div className='size-full min-w-screen min-h-screen flex flex-1'>
      <Header />
      {currentPage === 'hero' ? <Hero setCurrentPage={setCurrentPage} /> : <div>
        <h1>Upload</h1>
      </div>}
    </div>
  )
}

export default App
