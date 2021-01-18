import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">Ajithkumar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="List" id="basic-nav-dropdown">
                    <NavDropdown.Item>list1</NavDropdown.Item>
                    <NavDropdown.Item>list2</NavDropdown.Item>
                    <NavDropdown.Item>list3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">
        <div className="row mt-5">
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">About me</h4>
                  <div className="card-body">
                    <p className="card-text">'A methodical and innovative Data Analyst with extensive experience in research, data management and qualitative and quantitative analysis'
Skilled in tile Provision of strategic insight and in the interpretation of data, analysis of results and production of comprehensive reports. Collaborative communicator, continually focused on building client relationships to obtain a comprehensive understanding of data content and to establish detailed business requirements, Combined to communicating With senior management to implements improved databases, data collection systems, data analytics and other data-related strategies with a successful track record the utilization of data visualization tools to optimize statistical efficiency and quality.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">personal projects</h4>
                  <div className="card-body">
                    <p className="card-text">• Lesion Identification and Tissue Segmentation in Magnetic Resonance (MR) Image using Interval type based Clustering (03/2018)- Published in International conference. (MATLAB)
• Presented an “Edge Detection” Project In "MATLAB" using “Canny”, “Log”, “Sobel”, “Prewitt”, “Grey”.
• “Detecting the lesion and Tumour Tissue Segmentation In Brain” In "MATLAB" by Using K-means Algorithm.
• Walmart product sales predictive model with applied Data Analytics In R-Program.
• Using the Car Data Sets Predicting the Problems and solvation’s for the Datasets using "Tableau" Software.
• Presented a "Hadoop MapReduce" Project In Big Data which is tested in Linux.
• Presented a cloud computing project using Open Stack which is to create two types of Network and establish SSH connection between created Instances.
   </p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Education</h4>
                  <div className="card-body">
                    <p className="card-text">Master of Science: DATA SCIENTIST Middlesex University - London
Bachelor of Science: COMPUTER SCIENCE Kalasalingam University - India</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Table</h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>MailID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ajith</td>
                      <td>kumar</td>
                      <td>ajithkukumar@gmail.com</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;