import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Stack,
  Alert,
} from '@mui/material';

function Home() {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [custom, setCustom] = useState('');
  const [short, setShort] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', {
        originalUrl: url,
        validity: validity ? Number(validity) : undefined,
        customCode: custom || undefined,
      });
      setShort(`${window.location.origin}/short/${res.data.shortCode}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Error occurred');
      setShort('');
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#000' }}>
      URL Shortener
      </Typography>


      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mb: 3 }}>
        <Stack spacing={2}>
          <TextField
            label="Long URL"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
          />

          <TextField
            label="Validity (minutes)"
            type="number"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
            fullWidth
            inputProps={{ min: 1 }}
            helperText="Defaults to 30 minutes if left empty"
          />

          <TextField
            label="Custom shortcode"
            type="text"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            fullWidth
            helperText="Optional: 4-12 alphanumeric characters"
          />

          <Button variant="contained" type="submit" size="large">
            Shorten
          </Button>
        </Stack>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {short && (
        <Typography variant="body1">
          Shortened URL:{' '}
          <Link href={short} target="_blank" rel="noopener noreferrer">
            {short}
          </Link>
        </Typography>
      )}
    </Box>
  );
}

export default Home;
