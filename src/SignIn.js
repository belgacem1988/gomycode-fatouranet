import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
class SignIn extends Component {
    constructor(props){
        super(props)
        this.State = {
            email: '',
            password: '',
            //user: {}
        }
    }
        mailChange = (event) =>{
            if (event.target.value !== ""){
                this.setState({email:event.target.value});
            }
        }

        pwdChange = (event) => {
            if (event.target.value !== "") {
                this.setState({ password: event.target.value });
            }
        }

        // redirect = (e) => {
        //     e.preventDefault()
        //     const { history } = this.props;
        //     axios.get('/users/' + this.state.mail + '/' + this.state.pwd).then(res => {
        //         if (res.data.length > 0) {
        //             this.setState({
        //                 user: res.data
    
        //             })
        //             history.push('/Home')
    
        //         }
        //         else
        //             alert("Invalid email or password.")
        //     }
        //     )
        //         .catch(err => console.log("err"));
        // }
   
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                   <Form>
                      {/* <Form action="" onSubmit={(e) => this.redirect(e)}> */}
                    {/*onSubmit={(e) => this.redirect(e)}*/}
                      <h1>Login</h1>
                      <p className="text-muted">Connectez vous à votre compte</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="E-mail" />
                        {/*onChange={this.mailChange}*/} 
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mot de passe" onChange={this.pwdChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Mot de passe oublié?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Inscription</h2>
                      <p>Vous n'êtes pas inscrit sur FatouraNet</p>
                      <Link to="/SignUp">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Créer un compte</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignIn;
