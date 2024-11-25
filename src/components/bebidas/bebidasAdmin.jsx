import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'; 

const BebidasAdmin = () => {
  return (
    <div>

      <div className='mt-4 container-lg'>
        <Tabs>
        {/* Lista de pestañas */}
        <TabList>
          <Tab>Agregar Betida Tipo</Tab>
          <Tab>Agregar Bebidas</Tab>
          <Tab>Administrar Ventas</Tab>
        </TabList>

        {/* Panel para la pestaña bebidas tipo */}
        <TabPanel>
          <h2>Bebidas Tipo</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">gaseosa</li>
            <li class="list-group-item">cerveza</li>
            <li class="list-group-item">fernets</li>
            <li class="list-group-item">aperitivos</li>
            <li class="list-group-item">bebidas blancas</li>
          </ul>
          <Box component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          >
            <div className='d-flex align-items-center'>
              <TextField
                error
                id="standard-error-helper-text"
                label="Nueva Bebida Tipo"
                helperText="Ingrese una bebida tipo."
                variant="standard"
              />
              <Button variant="contained" color="success">
                Guardar
              </Button>
            </div>
          </Box>

        </TabPanel>

        {/* Panel para la pestaña bebidas */}
        <TabPanel>
          <h2>Bebidas</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">gaseosa coca cola 3 litros stock: 20</li>
            <li class="list-group-item">fernet branca 1,5 litros stock: 3</li>
            <li class="list-group-item">bebidas blancas gin tonic 1 litro stock: 5</li>
            <li class="list-group-item">aperitivos gancia 1,7 litros stock: 2</li>
            <li class="list-group-item">gaseosa manaos 1 litro stock: 10</li>
          </ul>

          <div className='d-flex align-items-center mt-5'>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <Button className='mt-4' variant="contained" color="success">
            Guardar
          </Button>
        </TabPanel>

        {/* Panel para la pestaña ventas */}
        <TabPanel>
          <h2>Ventas</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </TabPanel>
      </Tabs>
    </div>

      

    </div>
  )
}

export default BebidasAdmin