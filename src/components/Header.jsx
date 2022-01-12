import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { MenuItems } from '../data/MenuItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  createMenuLinks() {
    const listaComponents = [];
    for (let i = 0; i < MenuItems.length; i++) {
      listaComponents.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listaComponents;
  }

  render() {
    return (
      <nav>
        <h1>Mi aplicación</h1>
        <ul>{this.createMenuLinks()} </ul>
      </nav>
    );
  }
}

export default Header;
