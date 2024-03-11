import React, { useState } from 'react';

import Food from './components/Food';
import Lodging from './Lodging';

type ComponentType = 'Food' | 'Lodging' |  null;

const ParentComponent: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentType>(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Food':
        return <Food />;
      case 'B':
        return <ComponentB />;

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
