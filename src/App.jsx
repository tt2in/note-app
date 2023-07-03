import React from 'react'
import './App.css'
import Header from './component/Header'
import List from './component/List'
import {db} from  "./firebase.jsx"

export default function App() {
  console.log(db)
  return (
    <div className='App'>
      <Header />
      <List />
    </div>
  )
}
