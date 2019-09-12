import React from "react"



const Footer = () => (
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                <i class="fab fa-facebook fa-2x"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                <i class="fab fa-github fa-2x"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                <i class="fab fa-linkedin fa-2x"></i>
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright © Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>
)


export default Footer
