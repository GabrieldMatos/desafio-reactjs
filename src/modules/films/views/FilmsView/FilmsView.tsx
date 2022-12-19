import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { Box, CircularProgress } from '@mui/material';

import FilmList from '../../components/FilmList';
import { AllFilmsResponse } from '../../queries/types';
import { FILMS } from '../../queries';
import { Centered } from '../../../../styles';

const FilmsView: React.FC = () => {
  const navigate = useNavigate();
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: AllFilmsResponse } =
    useQuery(FILMS);
  if (loading) {
    return (
      <Centered  data-testid="loading">
        <CircularProgress />
      </Centered>
    );
  }
  if (data) {
    return (
      <Box p={2}>
        <FilmList
          {...data.allFilms}
          onClickItem={id => navigate(id)}
        />
      </Box>
    );
  }

  return (
    <Centered>
      <Typography variant="h3">an error occurred...</Typography>
      <Typography variant="body2">{error.message}</Typography>
    </Centered>
  );
};

export default FilmsView;
