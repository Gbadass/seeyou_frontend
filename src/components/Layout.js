import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout(){
  return(
    <>
    <div className="flex w-screen">
      <div className="sidebar_width">
      <Sidebar/>
      </div>

      <div className="w-full">
<TopBar/>
      </div>
    </div>
    </>

  )
}