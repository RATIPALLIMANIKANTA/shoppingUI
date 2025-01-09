import React, { useState } from 'react'
import './App.css'
import MainPage from './shoppingfolder/pages/MainPage'
import Collections from './shoppingfolder/components/Collections'
import WomanCollection from './shoppingfolder/components/WomanCollection'
import {Route,Routes} from 'react-router-dom'
import MenCollectionPage from './shoppingfolder/components/MenCollectionPage'
import WomanCollectionPage from './shoppingfolder/components/WomanCollectionPage'
import { Gents,Ladies } from './shoppingfolder/data'
import MenItemPage from './shoppingfolder/components/MenItemPage'

const App = () => {
  const[gentsFashion,setGentsFashion] = useState(Gents)
  const[ladiesFashion,setLadiesFashion] = useState(Ladies)


  return (
    
      <Routes>
        <Route path = "/" element = {<MainPage/>}/>

        <Route path = "/men" element = {<MenCollectionPage gentsFashion= {gentsFashion}/>} />

        <Route path="/woman"  element={<WomanCollectionPage ladiesFashion= {ladiesFashion}/>}/>

        <Route path="/men/:itemName" element={<MenItemPage/>} />

      </Routes>
    
  )
}

export default App
