import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

function RedirectHandler() {
  const { shortCode } = useParams();
  const [error, setError] = React.useState('');

  useEffect(() => {
    const redirect = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/url/${shortCode}`);
        window.location.href = res.data.originalUrl;
      } catch (error) {
        setError('Invalid or expired URL');
      }
    };
    redirect();
  }, [shortCode]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <CircularProgress sx={{ mb: 2 }} />
          <Typography variant="h6">Redirecting...</Typography>
        </>
      )}
    </Box>
  );
}

export default RedirectHandler;
