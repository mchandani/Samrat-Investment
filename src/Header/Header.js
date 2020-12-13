import React from 'react';

import { Row, Col } from 'reactstrap'
import '../Home/Home.css'
import x from '../logo/samrat_logo.jpg'

class Header extends React.Component{
    
    render(){
        return(
            <div fluid >

                    <Row className="header" >
                        <Col md="2" >
                            <img className="samrat_logo" src={x} alt="company_logo"/>
                        </Col>
                        <Col md="8" style={{ padding: "10px 0px", textAlign: "center", marginTop: "5px", }}>
                            <span ><button className="btn blu fontxl">Investment Management</button></span>
                            <span style={{marginLeft:"15px"}}><button className="btn green fontxl">Consultancy</button></span>
                            <span style={{marginLeft:"15px"}}><button className="btn purple fontxl">Saving</button></span>
                            <span style={{marginLeft:"15px"}}><button className="btn red fontxl">Funding</button></span>
                        </Col>
                        <Col md="2" style={{ padding: "10px 0px", textAlign: "center",fontSize:"13px" }}>
                            <button style={{ letterSpacing:"none" }} className="savingbtn fontxl">Open Account</button>
                        </Col>
                    </Row>
                    <hr style={{margin:"6px"}}/>

                    <Row style={{  borderBottom: "1px solid black",margin:"0px",paddingBottom:"6px",marginTop:"65px" }}>
                        <Col md="8" style={{ textAlign: "center",  }}>
                            
                            <span className="dropdown">
                                <button className="btn bluexl fontxl">
                                     Insight
                                </button>
                                <div>
                                    <ul className="dropdown-content fontxl" style={{fontSize:"14px"}}>
                                        <li>
                                            <a href="https://www.google.com">About us</a>
                                        </li>
                                    </ul>
                                </div>
                            </span>

                            <span className="dropdown">
                                <button className="btn greenxl fontxl">
                                    Financial Service
                                </button>
                                <div>
                                    <ul className="dropdown-content fontxl">
                                        <li>
                                            <a href="https://www.google.com">Financial Planning</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">Wealth Management</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">Financial Consultancy</a>
                                        </li>
                                        <li>
                                            <button onClick={() => {this.props.history.push('/loan')}} className="fontxl btnxl" >Loan</button>
                                        </li>
                                    </ul>
                                </div>
                            </span>

                            <span className="dropdown">
                                <button className="btn purplexl fontxl">
                                     Saving
                                </button>
                                <div>
                                    <ul className="dropdown-content fontxl">
                                        <li>
                                            <a href="https://www.google.com">Piggy Valley</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">Student Growth Plan</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">SamVan Growth Plan</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">Global Growth Plan</a>
                                        </li>
                                    </ul>
                                </div>
                            </span>

                            <span className="dropdown">
                                <button className="btn redxl fontxl">
                                    Global Service
                                </button>
                                
                            </span>

                            <span className="dropdown">
                                <button className="btn brownxl fontxl">
                                    Pay Here
                                </button>
                                
                            </span>

                            <span className="dropdown">
                                <button className="btn yellowxl fontxl">
                                    Contact
                                </button>
                                <div>
                                    <ul className="dropdown-content fontxl">
                                        <li>
                                            <a href="https://www.google.com">Business</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">FAQs</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </span>

                        </Col>

                        <Col md="2">
                            <span style={{ float: "right",letterSpacing:"none" }}><button className="savingbtn fontxl">Savings Plan</button></span>

                        </Col>
                        <Col md="2"><span style={{ letterSpacing:"none" }}><button className="livevaluebtn fontxl">Live Value 24%</button></span></Col>
                    </Row>


                </div>
        );
    }
}
export default Header;