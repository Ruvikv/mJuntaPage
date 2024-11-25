import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Bebidas = () => {
  return (
    <div>

      <div className='d-flex justify-content-center mt-4'>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://ardiaprod.vtexassets.com/arquivos/ids/310010/Gaseosa-CocaCola-Sabor-Original-3-Lts-_1.jpg?v=638599365810200000" className="card-img-top" alt="coca-cola"/>
            <div className="card-body d-flex justify-content-center" style={{width: "18rem"}}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Coca-Cola</li>
                <li className="list-group-item">3 litros</li>
                <li className="list-group-item">$4000</li>
              </ul>
            </div>
            <div className="card-footer">
              <ShoppingCartIcon/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bebidas