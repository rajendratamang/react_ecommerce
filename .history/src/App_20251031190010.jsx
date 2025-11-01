import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
