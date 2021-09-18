import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import Navbar from './Navbar'

function Dashboard() {
    return (
    <Navbar>
        <Container fluid> 
        <AddFolderButton />
        </Container>
    </Navbar>
    )
}

export default Dashboard
