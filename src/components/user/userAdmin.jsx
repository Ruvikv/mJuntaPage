import React from 'react'

const UserAdmin = () => {
  return (
    <div>
      <div className='pt-4'>
        <select class="form-select" aria-label="Default select example">
            <option selected>Filtra Rango</option>
            <option value="1">usuario</option>
            <option value="2">empleado</option>
            <option value="3">admin</option>
          </select>
        </div>
      <div>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Juan Perez</div>
              juanperez@hotmail.com
            </div>
            <span class="badge text-bg-primary rounded-pill">usuario</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">cristian castro</div>
              cristianCastro@gmail.com
            </div>
            <span class="badge text-bg-primary rounded-pill">empleado</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">francis huilipan</div>
              francisHuilipan@hotmail.com
            </div>
            <span class="badge text-bg-primary rounded-pill">admin</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default UserAdmin