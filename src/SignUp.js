import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Axios from 'axios';
class SignUp extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            Nom:"",
            Prenom:"",
            phone:"",
            adresse:"",
            email:"",
            password:"",

        }
    }
    firstNameChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ Nom: event.target.value });
        }
    }
    lastNameChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ Prenom: event.target.value });
        }
    }
    phoneChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ phone: event.target.value });
        }
    }
    adressChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ adresse: event.target.value });
        }
    }
    passwordChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ password: event.target.value });
        }
    }
    emailChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ email: event.target.value });
        }
    }
    onAddUserPressed=()=>
    {
        Axios.post("/addUsers",{...this.state})
        .then(res=> alert(res.data))
        .catch(err=>alert(err));
    }
  
  
  
  
  
  
    render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/*<CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                  </CardFooter>*/}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUp;
