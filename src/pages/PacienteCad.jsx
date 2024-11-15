import { useState } from "react";
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function PacienteCad() {
    const [paciente, setPaciente] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!paciente) return;

        const storedPacientes = JSON.parse(localStorage.getItem('paciente')) || []
        storedPacientes.push(paciente)
        localStorage.setItem('paciente', JSON.stringify(storedPacientes))
        setPaciente('')
        navigate('/pacientes')
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPaciente">
                    <Form.Label>
                        Paciente
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome"
                        value={paciente}
                        onChange={(e) => setPaciente(e.target.value)}
                    />

                </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Adicionar</Button>
            </Form>

        </>
    )
}

export default PacienteCad;