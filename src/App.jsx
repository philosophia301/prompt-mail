import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Upload from './Upload'
import Prompt from './Prompt'
import Result from './Result'

function App() {
  const [currentPage, setCurrentPage] = useState('hero')

  return (
    <div className='size-full min-w-screen min-h-screen flex flex-1'>
      <Header />
      {currentPage === 'hero' && <Hero setCurrentPage={setCurrentPage} />}
      {currentPage === 'upload' && <Upload setCurrentPage={setCurrentPage} />}
      {currentPage === 'prompt' && <Prompt setCurrentPage={setCurrentPage} />}
      {currentPage === 'result' && <Result setCurrentPage={setCurrentPage} />}
    </div>
  )
}

export default App
