import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import { ProgressBar } from 'react-bootstrap';
import { Container } from './Dashboard.elements';

const Dashboard = ({ pannel }) => {
    return (
        <Container>
            <Sidebar pannel={pannel} />
            <ProgressBar now={55} />
            <ProgressBar now={60} />

        </Container>
    );
};






export default Dashboard;