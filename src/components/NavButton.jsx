import React from 'react';
// import Button from 'react-bootstrap/Button'


const NavButton = ({name, href}) => <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={href}>{name}</a>
              </li>



export default NavButton;