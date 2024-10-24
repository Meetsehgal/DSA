import { Dropdown, Space } from 'antd';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { VscListSelection } from 'react-icons/vsc';
import Logo from "../../assets/img/logo/dsa-white-logo.png";
import HamIcon from "../../assets/img/icons/ham.png";

import "./MainNavbar.css"
import LoginModal from '../Login/LoginModal';
import { useContext, useState } from 'react';
import { store } from '../../Helpers/Store/Store';
export default function MainNavbar() {
    const {setShow,setModalType} = useContext(store)
    const items = [
        {
            key: '1',
            label: (
                <div onClick={()=>{
                    setShow(true)
                    setModalType("Login")
                }}>
                    Login
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={()=>{
                    setShow(true)
                    setModalType("Register")
                }}>
                    Register now
                </div>
            ),
        }
    ]
    return (
        <div className='px-lg-3 main-navbar-box'>
            <LoginModal/>
            <Navbar collapseOnSelect expand="lg" className='main-navbar py-0'>
                <Container fluid>
                    <div className="side-drawer">
                        {/* <VscListSelection /> */}
                        <img src={HamIcon} className='img-fluid' alt="" />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-flex align-items-center justify-content-between w-100">
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/editions">Megazine</Nav.Link>
                                <Nav.Link href="/newsletter">Newsletters</Nav.Link>
                                <Nav.Link href="/">Alerts</Nav.Link>
                                <div className="search-btn ms-2 mb-1">
                                    <IoSearch />
                                </div>
                            </div>
                            <Navbar.Brand href='/'>
                                <img src={Logo} className="img-fluid" alt="DSA Logo" />
                            </Navbar.Brand>
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/" className='theme-btn me-3'>Subscribe</Nav.Link>
                                <div className="login-dropdown">
                                    <Dropdown
                                        menu={
                                            {
                                                items
                                            }}
                                    >
                                        <a href='/' onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <FaUser />
                                            </Space>
                                        </a>
                                    </Dropdown>

                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}