import { useState } from 'react'

import './App.css'
import { Home } from './Components/Home/Home'
import { MasterLayout } from './Components/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './Components/About/About'
import { Skills } from './Components/Skills/Skills'
import { Experience } from './Components/Experience/Experience'
import { Work } from './Components/Work/Work'
import { Error } from './Components/Error/Error'

function App() {

  const Routes = createBrowserRouter([
    {path:"/",element:<MasterLayout/>,
      errorElement:<Error/>,
      children:[
        {index:true,element:<Home/>},
        {path:"Home",element:<Home/>},
        {path:"About",element:<About/>},
        {path:"Skills",element:<Skills/>},
        {path:"Experience",element:<Experience/>},
        {path:"Work",element:<Work/>},
      ]

    }
  ])

  return (
<>
<RouterProvider router={Routes}></RouterProvider>
</>
  )
}

export default App
