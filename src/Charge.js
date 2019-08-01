import React from "react";
import {
  Input,
  Col,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { Client, Fournisseur, Produit } from "./data.js";
import { addItem } from "./Actions/Action";

/*const Style = {

  margin-left: '100px',
  margin-right: '0px'
 };
 const StyleBody = {
 position: relative

 };*/

// const Date = [{ label: "DAte", value: "Date" }];
// const Clientx = [
//   {
//     id: "011",
//     label: "khaled",
//     adresse: "cité elkhadhra",
//     value: "011",
//     email: "ayed.khaled@gmail.com",
//     isFixed: true
//   },

//   {
//     id: "012",
//     label: "belgacssem",
//     adresse: "elmourouj",
//     value: "012",
//     email: "talbibelgacem88@gmail.com",
//     isFixed: true
//   }
// ];
// const Fournisseur = [
//   {
//     id: "021",
//     label: "jobran",
//     adresse: "cité elkhadhra",
//     value: "021",
//     email: "jobra.amairy@gmail.com",
//     isFixed: true
//   },

//   {
//     id: "022",
//     label: "bachir",
//     adresse: "elmourouj",
//     value: "022",
//     email: "bachirtalbi@gmail.com",
//     isFixed: true
//   },

//   {
//     id: "023",
//     label: "amine",
//     adresse: "elmourouj",
//     value: "023",
//     email: "aminesghayer@gmail.com",
//     isFixed: true
//   }
// ];
// const Produit = [
//   { id: "021", label: "livre", prix: "30dt", value: "livre" },

//   { id: "022", label: "stylo", prix: "4dt", value: "stylo" },

//   { id: "023", label: "cahier", prix: "10dt", value: "cahier" }
// ];

class Charge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: "",
      clientName: "",
      fournisseur: "",
      produits: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeClient = selectedOptions => {
    this.setState({
      clientName: selectedOptions
    });
  };
  handleChangeFournisseur = selectedOptions => {
    this.setState({
      fournisseur: selectedOptions
    });
  };
  handleChangeProduit = selectedOptions => {
    this.setState({
      produits: selectedOptions
    });
  };

  render() {
    const { addItem } = this.props;
    const { date, clientName, fournisseur, produits } = this.state;
    return (
      <div>
        <Button id="charge" color="success" onClick={this.toggle}>
          <style jsx>
            {`
              #charge {
                margin-left: 700px;
                margin-top: 300px;
              }
            `}
          </style>
          Charge Facture
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Charge Facture</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Col md="12">
                <Label htmlFor="date-input">Date Input </Label>
              </Col>
              <Col>
                <Input
                  type="date"
                  id="date-input"
                  name="date"
                  placeholder="date"
                  onChange={this.handleChangeInput}
                />
              </Col>
            </FormGroup>
            <Label htmlFor="text-input">NomClient</Label>
            <Select
              isMulti
              name="clientName"
              options={Client}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChangeClient}
            />

            <Label htmlFor="text-input">Nom Fournisseur</Label>
            <Select
              isMulti
              name="fournisseur"
              options={Fournisseur}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChangeFournisseur}
            />
            <Label htmlFor="text-input">Produits</Label>
            <Select
              isMulti
              name="produits"
              options={Produit}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChangeProduit}
            />
            {/* <Button id='charge'color="success" onClick={()=>{this.props.sendData({data: mydata})}}><style jsx> {`#charge {margin-left: 500px; margin-top: 200px}`} </style>sendData</Button> */}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                addItem(date, clientName, fournisseur, produits);
              }}
            >
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
// map state
// function mapStateToProps(state) {
//   return {
//     something: state.something
//   };
// }

// map dispatch
function mapDispatchToProps(dispatch) {
  return {
    addItem: (date, client, fournisseur, produits) => {
      dispatch(addItem({ date, client, fournisseur, produits }));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Charge);
