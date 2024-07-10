import {doubleArrow,linkPng} from './../assets'
import routes from '../routes'
import { Link } from 'react-router-dom'


export default function Sidebar(){
  return(
    <>
    <div className="p-5 sidebar_width border-r h-screen">
      <div className='overflow-scroll'>
      <div className="flex items-center justify-between">
    <h1 className="font-bold text-2xl">LOGO</h1>
    <img src={doubleArrow} className="w-4 h-4" alt="" />
    </div>

  <div className='mt-10'>
  {routes.filter((route)=> route.isSidebar).map((route)=>(
    <Link>
    <div className='flex gap-3 mt-8 items-center'>
<span>{route.icon}</span>
    <p>{route.name}</p>
    </div>
    </Link>
  ))}
  </div>


      </div>

    </div>

    </>
  )
}