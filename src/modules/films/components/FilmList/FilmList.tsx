import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import FilmCard from '../FilmCard';
import { FilmListProps } from './types';

const FilmList: React.FC<FilmListProps> = ({ films, onClickItem }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {films.map((film, index) => (
          <Grid
            xs={12}
            sm={4}
            md={4}
            lg={3}
            xl={2}
            key={index}
            data-testid="list-item"
          >
            <FilmCard
              {...film}
              onClick={() => onClickItem(film.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilmList;
