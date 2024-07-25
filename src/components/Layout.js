import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ children }) {

  const [currentView, setCurrentView] = useState('timeGridDay');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <div className="flex w-screen">


        <div className="sidebar_width2 h-screen">
          <TopBar onViewChange={handleViewChange} currentView={currentView} />
          <div className="p-5 pb-20 min-h-screen overflow-y-auto w-full ">
          {React.Children.map(children, child => 
              React.cloneElement(child, { currentView, onViewChange: handleViewChange })
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
