import React, { ComponentType, useState } from 'react';
import Lodging from '@/components/Lodging';
import Food from '@/components/Food';
import Navbar from '@/components/Navbar';
const ParentComponent: React.FC = () => {
const [activeComponent, setActiveComponent] = useState<string>(null);

const renderComponent = () => {
    switch (activeComponent) {
        case 'Food':
            return <Food />;
        case 'Lodging':
            return <Lodging />;

        default:
            return <div>Select a component</div>;
    }
};

  return (
    <div>
        <Navbar/>
        <div >
      <button onClick={() => setActiveComponent('Food')}>Load Component A</button>
      </div>
      <button onClick={() => setActiveComponent('Lodging')}>Load Component B</button>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
