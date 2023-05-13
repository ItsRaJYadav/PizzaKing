import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Tab({ active, onClick, children }) {
  const activeClass = active ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800";
  const history = useNavigate();

  return (
    <button
      className={`flex-1 py-2 px-4 text-lg font-medium ${activeClass}`}
      onClick={() => {
        onClick();
        history.push("/filter");
      }}
    >
      {children}
    </button>
  );
}

function TabGroup({ activeTab, onTabChange, children }) {
  return (
    <div className="flex flex-row">
      {React.Children.map(children, (child, index) => (
        <Tab
          active={index === activeTab}
          onClick={() => onTabChange(index)}
        >
          {child.props.label}
        </Tab>
      ))}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <TabGroup activeTab={activeTab} onTabChange={setActiveTab}>
        <Link label="Tab 1">Content for tab 1</Link>
        <Link label="Tab 2">Content for tab 2</Link>
        <Link label="Tab 3">Content for tab 3</Link>
      </TabGroup>
    </div>
  );
}

export default App;
