import React, { ComponentType, useState } from 'react';
import Lodging from '@/components/Lodging';
import Food from '@/components/Food';
import Navbar from '@/components/Navbar';
import Transportation from '@/components/Transportation';
const ParentComponent: React.FC = () => {
const [activeComponent, setActiveComponent] = useState<string>(null);

const renderComponent = () => {
    switch (activeComponent) {
        case 'Food':
            return <Food />;
        case 'Lodging':
            return <Lodging />;
        case 'Transportation':
            return <Transportation/>

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
      <button onClick={() => setActiveComponent('Transportation')}>Load Component C</button>

      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
