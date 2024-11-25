import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'

const User = () => {


  const editarPerfilUrl = "/editarPerfil";

  return (
    <div>
      <section className="custom-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 custom-card">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white custom-left-radius">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <p>Administrador</p>
                    <h5>Marie Horwitz</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">info@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Telefono</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className='d-flex justify-content-center gap-3'>
        <div>
          <button className="button-custom">
              <span className="button-lg-custom">
                <span className="button-sl-custom"></span>
                <span className="button-text-custom" onClick={editarPerfilUrl}>Editar Perfil</span>
              </span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default User