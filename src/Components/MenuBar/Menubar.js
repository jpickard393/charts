import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import './menubarStyle.css';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Charts</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem><Link to="/">Home</Link></NavItem>
                        <NavItem><Link to="/bullish">Bullish</Link></NavItem>
                        <NavItem><Link to="/bearish">Bearish</Link></NavItem>
                        <NavItem><Link to="/neutral">Neutral</Link></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}
export default Menubar;