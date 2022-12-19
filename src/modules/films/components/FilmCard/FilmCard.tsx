import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

import logo from '../../../../images/star-wars-logo.png';
import { FilmCardProps } from './types';
import { dateFormatter } from '../../utils/dateFormatter';

const FilmCard: React.FC<FilmCardProps> = ({
  title,
  director,
  releaseDate,
  onClick,
}) => {
  return (
    <CardActionArea onClick={onClick}>
      <Card elevation={2}>
        <CardHeader
          title={title}
          subheader={dateFormatter(releaseDate)}
        />
        <CardMedia
          component="img"
          height="194"
          image={logo}
          alt="Star Wars logo"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <b>Diretor:</b> {director}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default FilmCard;
