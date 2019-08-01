import React, { Component } from 'react';
import {
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';  
class Fournisseur extends Component {
          
              
    render() {
        return (    
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                  
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom Produit</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                   
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Prix vente</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email-input" name="Prix-vente" placeholder="Enter Email" autoComplete="email"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label >Phone </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="date-input" name="date-input" placeholder="phone" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="id-input">Identifiant</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" name="id-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Multiple File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </Col>
                  </FormGroup> */}
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
        );
    }
}
export default Fournisseur;