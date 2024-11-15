import { Container, Navbar, Nav } from "react-bootstrap"
import { Route, Routes, Link } from "react-router-dom"

import Home from "./pages/Home"
import PacienteList from './pages/PacienteList'
import PacienteCad from './pages/PacienteCad'

function App() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            SoftHelth - ERS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to={'/pacientes'}>
              Pacientes
            </Nav.Link>
            <Nav.Link as={Link} to={'/cadastro'}>
              Cadastro
            </Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<PacienteList />} />
          <Route path="/cadastro" element={<PacienteCad />} />

        </Routes>

      </Container>
    </>
  )
}

export default App
