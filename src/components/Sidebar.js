import {doubleArrow,linkPng} from './../assets'


export default function Sidebar(){
  return(
    <>
    <div className="p-5 sidebar_width border-r h-screen">
    <div className="flex items-center justify-between">
    <h1 className="font-bold text-2xl">LOGO</h1>
    <img src={doubleArrow} className="w-4 h-4" alt="" />
    </div>
    div
    <div className='flex gap-3'>
    <img src={linkPng} className="w-4 h-4" alt="" />
    <p>Event Types</p>
    </div>
    </div>

    </>
  )
}