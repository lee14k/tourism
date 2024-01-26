import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const PhotoExplore = () => {
    return (
        <div className="">
            <h1>Two Photos Grid</h1>
            <Grid templateColumns="2fr 1fr" gap={4} className="grid-cols-3">
                <GridItem colSpan={2}>
                    <img src="stok.jpg" alt="Photo 1" />
                </GridItem>
                <GridItem colSpan={1}>
                    <img src="stok.jpg" alt="Photo 2" />
                </GridItem>
            </Grid>

            <h1>Three Photos Grid</h1>
            <Grid templateColumns="3fr 2fr 1fr" gap={4}>
                <GridItem colSpan={3}>
                    <img src="stok.jpg" alt="Photo 3" />
                </GridItem>
                <GridItem colSpan={2}>
                    <img src="stok.jpg" alt="Photo 4" />
                </GridItem>
                <GridItem colSpan={1}>
                    <img src="stok.jpg" alt="Photo 5" />
                </GridItem>
            </Grid>
        </div>
    );
};

export default PhotoExplore;
