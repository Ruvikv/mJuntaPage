import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Bebidas = () => {

  const [bebidas, setBebidas] = useState([]);
  

  useEffect(() => {
    const fetchBebidas = async () => {

      const token = localStorage.getItem('token');      

      if (!token) {
        console.error('Token de autenticación no encontrado');
        return;
      }
      
      try {
        const response = await fetch('http://localhost:3553/api/v1/bebidas/bebidas', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        // Asegúrate de verificar la respuesta antes de acceder a data
        if (response.ok) {
          const data = await response.json();
          setBebidas(data);

          if (data && data.token) {
            localStorage.setItem('authToken', data.token);
          }
        } else {
          console.error("Error al obtener la lista de bebidas");
        }
      } catch (err) {
        console.error("Error al conectar", err);
      }
    };
    fetchBebidas();
  }, []);
  

  return (
    <div>

            <div className="d-flex justify-content-center mt-4 gap-3">
            {bebidas.length > 0 ? (
              bebidas.map((bebida, index) => (
              <div className="card" key={index}>
                <img
                  src="https://ardiaprod.vtexassets.com/arquivos/ids/310010/Gaseosa-CocaCola-Sabor-Original-3-Lts-_1.jpg?v=638599365810200000"
                  className="card-img-top"
                  alt="coca-cola"
                />
                <div className="card-body d-flex justify-content-center">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{bebida.tipo}</li>
                    <li className="list-group-item">{bebida.nombre}</li>
                    <li className="list-group-item">{bebida.descripcion}</li>
                    <li className="list-group-item">{bebida.precio_venta}</li>
                    <li className="list-group-item">{bebida.stock}</li>
                    <li className="list-group-item">{bebida.estado}</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <ShoppingCartIcon />
                </div>
              </div>
          ))
          ) : (
            <div className="text-center">
              <p>No hay bebidas disponibles.</p>
            </div>
          )}
        </div>
        
    </div>
  );
}

export default Bebidas