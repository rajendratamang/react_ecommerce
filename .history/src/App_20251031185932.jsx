import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< />} />
          <Route path='/shop' element={<S />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
