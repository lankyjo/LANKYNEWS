import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'

const App = () => {
  let world = `http://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_KEY}&categories=general&languages=en`;
  const [category, setCategory] = useState(world)
  const[title, setTitle] = useState('World')
  return (
    <>
     <Navbar setCategory ={setCategory} setTitle={setTitle} />
     <Newsboard category = {category} title = {title} />
    </>
  )
}

export default App
