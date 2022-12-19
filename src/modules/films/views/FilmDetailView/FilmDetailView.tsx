import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';

import { FilmDetailResponse } from '../../queries/types';
import { FILM_DETAIL } from '../../queries';
import { Centered } from '../../../../styles';
import FilmDescription from '../../components/FilmDescription';

const FilmDetailView: React.FC = () => {
  const navigate = useNavigate();

  
  const { id } = useParams();
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: FilmDetailResponse } = useQuery(
    FILM_DETAIL,
    { variables: { filmId: id } }
  );
  if (loading) {
    return (
      <Centered>
        <CircularProgress data-testid='loading'/>
      </Centered>
    );
  }
  if (data) {
    return (
      <Box sx={{ flexGrow: 1 }} p={4}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
            >
              voltar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FilmDescription {...data} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Centered>
      <Typography variant="h5">an error occurred...</Typography>
      <Typography variant="body2">{error.message}</Typography>
    </Centered>
  );
};

export default FilmDetailView;
