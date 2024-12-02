import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle, Backdrop, CircularProgress, Button } from '@mui/material';
import MalaJunta from '../../images/MalaJuntaFullHD.png';
import { Navigate, useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    navigate('/')
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='container-fluid d-flex flex-column align-items-center bg-black p-0'>
    <Button 
      className='w-50 mt-4' 
      variant="contained" 
      color="error" 
      onClick={handleOpen}
    >
      VOLVER
    </Button>

  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    onClick={handleClose}
  >
    <CircularProgress color="inherit" />
  </Backdrop>

  <Alert severity="error" className='w-100 mt-4 mb-4 justify-content-center'>
    <AlertTitle>¡¡NO AUTORIZADO!!</AlertTitle>
    No Está Autorizado Para El Acceso.
  </Alert>

  <img 
    className="img-fluid w-100" 
    style={{ maxHeight: '100vh', objectFit: 'cover' }} 
    src={MalaJunta} 
    alt="MalaJunta" 
  />

  <Alert severity="error" className='w-100 mt-4 mb-4 justify-content-center'>
    <AlertTitle>Error</AlertTitle>
    No Está Autorizado Para El Acceso.
  </Alert>
</div>
  );
}

export default Unauthorized;
