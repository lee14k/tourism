import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const PhotoExplore = () => {
    return (
        <div className="grid grid-cols-2">
            <h1>Two Photos Grid</h1>
            <div>
            <div className="grid grid-cols-3">
                <div>
                    <img src="stok.jpg" alt="Photo 3" />
                </div>
                <div  className="col-span-2">
                    <img src="stok.jpg" alt="Photo 3" />
                </div>
            </div>
            </div>

            <h1>Three Photos Grid</h1>

            <div className="grid grid-cols-6">
                <div className="col-span-3">
                    <img src="stok.jpg" alt="Photo 3" />
                </div>
                <div  className="col-span-2">
                    <img src="stok.jpg" alt="Photo 3" />
                </div>
                <div  className="col-span-1">
                    <img src="stok.jpg" alt="Photo 3" />
                </div>
            </div>
        </div>
    );
};

export default PhotoExplore;
