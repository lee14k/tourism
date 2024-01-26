import React from 'react';
import PhotoExplore from './PhotoExplore';

const ExploreBox: React.FC = () => {
    return (
        <div className="explore-box">
            <div className="text-column">
                <h1>Heading here</h1>
            </div>
            <div className="photo-column">
                <PhotoExplore />
            </div>
        </div>
    );
};

export default ExploreBox;
