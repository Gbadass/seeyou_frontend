import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex w-screen">
        <div className="sidebar_width">
          <Sidebar />
        </div>

        <div className="sidebar_width2 h-screen">
          <TopBar />
          <div className="p-5 pb-20 min-h-screen overflow-y-auto w-full ">{children}</div>
        </div>
      </div>
    </>
  );
}
