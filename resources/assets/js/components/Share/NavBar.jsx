import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/admin/dashboard">My App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Registros
                        </NavItem>
                        <NavItem eventKey={1} href="/admin/proyecto">
                            Proyectos
                        </NavItem>
                        <NavItem eventKey={2} href="/admin/usuario">
                            Usuarios
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Usuario" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.3}>Opciones</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Cerrar Sesión</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
