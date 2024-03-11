import React, { ComponentType, useState } from 'react';
import Lodging from '@/components/Lodging';
import Food from '@/components/Food';
const ParentComponent: React.FC = () => {
const [activeComponent, setActiveComponent] = useState<string>(null);

const renderComponent = () => {
    switch (activeComponent) {
        case 'Food':
            return <Food />;
        case 'B':
            return <Lodging />;

        default:
            return <div>Select a component</div>;
    }
};

  return (
    <div>
      <button onClick={() => setActiveComponent('Food')}>Load Component A</button>
      <button onClick={() => setActiveComponent('B')}>Load Component B</button>
      <button onClick={() => setActiveComponent('C')}>Load Component C</button>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
