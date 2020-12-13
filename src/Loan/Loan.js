import React from 'react';
import { Row,Col } from "react-bootstrap";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import loan from '../logo/loan.png'
import '../Home/Home.css'
class Loan extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {/* -----------------------------------------Body-------------------------------------------------- */}
                <Row>
                    <Col md="12">
                        <img src={loan}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="4"></Col>
                    <Col md="5" style={{textAlign:"center",lineHeight:"1.5rem"}}>
                        <Row>
                            <Col>
                                <h2 style={{color:"#007bff"}}>How to apply for loan</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Our loan service is availavle only for our limited customer</h4>
                            </Col> 
                        </Row>
                        <Row>
                            <Col>
                                <h4>If you build trust, we accomplish your financial dream</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign:"left"}}>
                                <ul>
                                    <li>Enjoy the loan at very low interest, less than 8%*</li>
                                    <li>Loan, only our previous customer can apply and access the loan facility,</li>
                                    <li>We offer loan periodically.</li>
                                    <li>Safe, Quick and Secure process,</li>
                                    <li>No service charges required,</li>
                                    <li>We don't ask for any collateral for the loan,​​</li>
                                    <li>From personal to business, loan on lowest possible interest. Feel the Experience we offer, not only money.</li>
                                    <li>Loan for your every requirement,</li>
                                    <li>Personal loan up to ₹ 5000 - ₹ 8 000 000,</li>
                                    <li>Small business loan up to ₹ 35 000 - ₹ 280 000 000,</li>
                                    <li>For Corporate Loan ask our assistance.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span style={{textAlign:"left"}}>Note: Unfortunately, we don't offer to new customer or anyone who required loan.</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className="btn blu fontxl" style={{marginTop:"5px"}}>Check eligibility</button>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
                {/* -----------------------------------------footer------------------------------------------------ */}
                <Footer/>
            </div>
        );
    }
}
export default Loan;