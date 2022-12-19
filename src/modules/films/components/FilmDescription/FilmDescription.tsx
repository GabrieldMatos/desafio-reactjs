import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

import { FilmDescriptionProps } from './types';
import { dateFormatter } from '../../utils/dateFormatter';

const FilmDescription: React.FC<FilmDescriptionProps> = ({ film }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h4"
          mb={1}
        >
          {film.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
        >
          {film.openingCrawl}
        </Typography>

        <Typography
          mb={1}
          variant="body2"
        >
          <b>Dirigido por: </b>
          {film.director}
        </Typography>

        <Typography
          mb={1}
          variant="body2"
        >
          <b>Criado em: </b>
          {dateFormatter(film.releaseDate)}
        </Typography>

        <Typography
          mb={1}
          variant="body2"
        >
          <b>Episódios: </b>
          {film.episodeID}
        </Typography>

        <Typography variant="body2" component='div'>
          <b>Produzido por: </b>
          <ul>
            {film?.producers?.map((producer, index) => (
              <Typography
                variant="body2"
                component="li"
                key={index}
              >
                {producer}
              </Typography>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilmDescription;
