import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';
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
          <Tab>Proveedor</Tab>
          <Tab>Agregar Betida Tipo</Tab>
          <Tab>Agregar Bebidas</Tab>
          <Tab>Administrar Compra</Tab>
          <Tab>Administrar Ventas</Tab>
        </TabList>

        {/* Panel para la pestaña proveedores */}
        <TabPanel>
          <h2>Proveedores</h2>
          <ul class="list-group list-group-flush list-group-item-primary">
            <li class="list-group-item">Diarco</li>
            <li class="list-group-item">diarco sona zur 300</li>
            <li class="list-group-item">2954443322</li>
          </ul>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center', 
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Nombre del Proveedor"
              required
              id="outlined-required"
            />
            <TextField
              label="Direccion"
              required
              id="outlined-required"
            />
            <TextField
              label="Telefono"
              required
              id="outlined-required"
            />
            <Button
              variant="contained"
              color="success"
              sx={{
                width: '150px',
                mt: 2, 
              }}
            >
              Guardar
            </Button>
          </Box>
        </TabPanel>



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
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center'}}
          noValidate
          autoComplete="off"
          >
            <div className='d-flex align-items-center'>
              <TextField
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
            <li class="list-group-item">5000 gaseosa coca cola 3 litros stock: 20</li>
            <li class="list-group-item">8000 fernet branca 1,5 litros stock: 3</li>
            <li class="list-group-item">12000 bebidas blancas gin tonic 1 litro stock: 5</li>
            <li class="list-group-item">6000 aperitivos gancia 1,7 litros stock: 2</li>
            <li class="list-group-item">2000 gaseosa manaos 1 litro stock: 10</li>
          </ul>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center', 
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ minWidth: 120 }}>
                <TextField 
                id="standard-error-helper-text"
                label="precioFinal"
                helperText="Precio Final."
                variant="standard"
                />
                <Select
                value="precio"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="bebidas blancas">opciones</MenuItem>
                </Select>
                <Select
                value="precio"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="bebidas blancas">opciones</MenuItem>
                </Select>
                <Select
                value="precio"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="bebidas blancas">opciones</MenuItem>
                </Select>
                <Select
                value="precio"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="bebidas blancas">opciones</MenuItem>
                </Select>
            </FormControl>
            <Button className='mt-4' variant="contained" color="success">
              Guardar
            </Button>
          </Box>
        </TabPanel>


        {/* Panel para la pestaña compras */}
        <TabPanel>
          <h2>Compras</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
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