import React from 'react'
import './stylebuttonbar.css'

const Sidebar = () => {
  return (
    <div>
        <nav class="navbar p-3">
            <div class="container-fluid">
            <button className="learn-more" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                    I will not close if you click outside of me.
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Sidebar