import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import CadastroIten from "../Pages/CadastroIten";
import { useNavigate } from 'react-router-dom';


function  NavbarComponentes () {

    const navigate = useNavigate();


  return (
          <>
            <Navbar expand="lg" className="bg-body-primary" fixed='top' style={{ backgroundColor: '#0746B4', display: 'flex', alignItems: 'center', height: '11vh' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./LogoSenai.svg" alt="LogoSenai"
                            onClick={() => navigate('/')}
                        />
                    </Navbar.Brand>
                    <NavDropdown color='#FFFFFF' title="Menu" id="basic-nav-dropdown"
                        style={{
                            color: '#FFFFFF',
                            fontSize: '15px',
                        }}>
                        <div style={{
                            //   Se der tempo fazer igual
                        }}>
                            <NavDropdown.Item href="#action/3.1" onClick={() => navigate('/Cadastro')}>Cadastro</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'></NavDropdown.Item>
                            <NavDropdown.Divider />
                        </div>
                    </NavDropdown>

                     <NavDropdown color='#FFFFFF' title="Menu" id="basic-nav-dropdown"
                        style={{
                            color: '#FFFFFF',
                            fontSize: '15px',
                        }}>
                        <div style={{
                            //   Se der tempo fazer igual
                        }}>
                            <NavDropdown.Item href="#action/3.1" onClick={() => navigate('/CadastroIten')}>Cadastro Iten</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'></NavDropdown.Item>
                            <NavDropdown.Divider />
                        </div>
                    </NavDropdown>

                    {/* Estilizando para telas pequenas */}
                    {/* <div className={styles.Estilizacao}> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">

                                <section className={stales.areaBranca}>
                                    <div className="form-floating mb-3" style={{ width: 900, display: 'flex', alignItems: 'center' }}>
                                        <input type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            style={{
                                                position: 'relative',
                                                top: '3vh',
                                                height: '4vh',
                                                width: '50vw',
                                                padding: '1%',
                                                backgroundColor: 'white',
                                            }}
                                        />
                                    </div>
        
                                </section>
                            </Nav.Link>
                          

                            {/* <Nav.Link href="#home">
                                <label htmlFor="floatingInput">
                                    <img src="/FavoritarCurso.svg" style={{
                                        paddingTop: '5vh',
                                        position: 'relative',
                                        right: '4vw'
                                    }} />
                                </label>
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    // <Navbar bg="primary" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Cadastro</Nav.Link>
    //         <Nav.Link href="#pricing">Mercadoria</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
  );

}
export default NavbarComponentes;