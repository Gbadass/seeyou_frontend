import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ children }) {

  console.log("Layout: Rendering children:", children);

  const [currentView, setCurrentView] = useState("timeGridDay");

  useEffect(() => {
    console.log("Current view in Layout:", currentView);
  }, [currentView]);

  const handleViewChange = (view) => {
    console.log("Layout: View changed to:", view);
    setCurrentView(view);
  };

  return (
    <>
      <div className="flex w-screen">
        <div className="sidebar_width2 h-screen">
          <TopBar onViewChange={handleViewChange} currentView={currentView} />
          <div className="pl-5 pb-20 min-h-screen overflow-y-auto w-full ">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                currentView,
                onViewChange: handleViewChange,
              })
            )}
          </div>
        </div>

        <div className="sidebar_width">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
