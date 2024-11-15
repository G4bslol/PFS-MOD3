import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function PacienteList() {
    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const storedPacientes = JSON.parse(localStorage.getItem('paciente')) || []
        setPacientes(storedPacientes)

    }, [])


    return (
        <>
            <h2>
                Paciente List
            </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#           </th>
                        <th>Paciente    </th>
                        <th>Ações       </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pacientes.map((pacientes, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{pacientes}</td>
                                <td>
                                    <Button variant="danger">
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </>
    )
}

export default PacienteList;