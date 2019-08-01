import React, { Component } from "react";
import { connect } from "react-redux";
//import { arrayOfObject } from "../../sharedFunction"

class Invoice extends Component {
  //   renderTmp = () => {
  //     const { template } = this.props
  //     if (template) {
  //       let res = arrayOfObject(template["users"])
  //       res = res.filter(d => d.key !== "data" && d.key !== "landingId")
  //       const divRes = res.map(elem => {
  //         return (
  //           <p>
  //             <b>{elem.key}:</b>
  //             {elem.value}
  //           </p>
  //         )
  //       })

  //       return divRes
  //     }
  //   };
  //   renderCurrentListFromLanding = () => {
  //     const { template } = this.props
  //     if (template) {
  //       let res = arrayOfObject(template["landing"])
  //       const defaultValues = Object.keys(template["landing"].defaultValue)
  //       const boolList = res.filter(d => typeof d.value === "boolean")
  //       const newList = boolList.filter(d => !defaultValues.includes(d.key))
  //       return newList
  //     } else {
  //       return []
  //     }
  //   };
  //   cleanBool = (data, type) => {
  //     let res = arrayOfObject(data)
  //     //const defaultValues = Object.keys(data.defaultValue)
  //     const boolList = res.filter(d => typeof d.value === "boolean")
  //     return boolList
  //   };
  renderTotal(list, template) {
    let myTotal = [];
    for (let elem of list) {
      const customList = template[elem.key];
      if (customList && customList.data) {
        myTotal.push(
          customList.data.map(item => Number(item.prix)).reduce(reducerSome)
        );
      }
    }
    const { factureFinale } = this.props;
    // console.log(this.props.factureFinale)
    return (
      <center>
        {myTotal.length > 0
          ? myTotal.map(elem => Number(elem)).reduce(reducerSome)
          : 0}
      </center>
    );
  }
  render() {
    const { id, template } = this.props;
    const list = [];
    //     <center>
    //     {factureFinale.length > 0
    //       ? factureFinale.produits.map(elem => elem.prix).reduce(reducerSome)
    //       : 0}
    //   </center>
    // )
    // }
    // render() {

    const { factureFinale } = this.props;
    return (
      <div
        id={id}
        style={{
          width: "1100px",
          margin: " 0 auto"
        }}
        className="container"
      >
        <h1
          style={{
            textAlign: "center"
          }}
          className="offretTitle"
        >
          <b>OFFRE DE PRIX</b>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
          className="info"
        >
          <div className="usersInvoice">
            <p>
              <b>{"Talbi"}:</b>
              {"Belgacem"}
            </p>
            <p>date:{factureFinale && factureFinale[0] &&  factureFinale[0].date}</p>
            {/* {this.renderTmp() ? this.renderTmp() : ""} */}
          </div>
          <div>
            <p>Chargé de l'affaire:*******</p>
            <p>
              <b>Tel: 27416779</b>
            </p>
          </div>
        </div>
        <br />
        <div>
          <table border="1" width="100%" height="384">
            <thead>
              <tr>
                <th align="center">Désignation </th>
                <th align="center">Prix de vente</th>
                <th align="center">Quantité</th>
                
                <th width="70" align="center">
                  P.U.HT
                </th>
                <th width="86" align="center">
                  Total.HT
                </th>
              </tr>
              { factureFinale && factureFinale[0] &&  factureFinale[0].produits.map(el=>{
                   return(<tr>
                 
                    <td align="center">Belgacem </td>
                      <td align="center">**********</td>
                      <td align="center">2</td>
                      </tr>
                      
                        )

                 })}
              <tr>
              <td align="center">********** </td>
                <td align="center">**********</td>
                <td align="center">3</td>
                </tr>
                <tr>
              <td align="center">********** </td>
                <td align="center">**********</td>
                <td align="center"></td>
                </tr>
            </thead>
            <tbody>
              {list.map((elem, i) => {
                const customList = template[elem.key];
                const [single] = customList && customList.data;

                return (
                  <tr key={i}>
                    <td align="center">
                      <blockquote>
                        <p>{elem.key}</p>
                      </blockquote>
                    </td>
                    <td align="center">
                      {customList &&
                        customList.data.map(item => {
                          const cleanBool = this.cleanBool(item);
                          return (
                            <div align="center">
                              {cleanBool
                                .filter(d => d.value)
                                .map(elem => elem.key)
                                .join(" ")}
                            </div>
                          );
                        })}
                    </td>
                    <td align="center">
                      {customList && customList.data.length}
                    </td>
                    <td width="86" align="center">
                      {single && single.prix}
                    </td>
                    <td align="center">
                      <b>
                        {customList &&
                          customList.data
                            .map(elem => Number(elem.prix))
                            .reduce(reducerSome)}
                      </b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table border="1" align="right">
            <tbody>
              <tr>
              
                <td width="86">
                  <center>Total HT</center>
                </td>
                {/* <td width="86">{this.renderTotal(list, template)}</td> */}
              </tr>

              <tr>
                <td width="86">
                  <center>TVA19%</center>
                </td>
                <td width="86">
                  <center>124,45</center>
                </td>
              </tr>

              <tr>
                <td width="86">
                  <center>Timbre</center>
                </td>
                <td width="86">
                  <center>0,600</center>
                </td>
              </tr>

              <tr>
                <td width="86">
                  <center>Total TTC</center>
                </td>
                <td width="86">
                  <center>780,05</center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div>
          <p>* T.V.A 19%</p>
          <p>
            * Les quantités stiqulées dans le présent devis pourraient subir une
            variation de +/- 5% lors de la livraison.
          </p>
          <p>* Les prix seralent ajustés en conséquence.</p>
          <p>* Cette offre est valable 30 jours.</p>
        </div>

        <div>
          <h3>
            <u>Modalités de paiement(En DNT):</u>
          </h3>
          <p>
            <b>50% a la commande et 50% a la livraison</b>
          </p>
          <h3>
            <u>
              <b>délais de livraison</b>
            </u>{" "}
            : ........ jours Partielle a partir de la réception de l'avance et
            du bon de commande.
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  factureFinale: state
});

const reducerSome = (accumulator, currentValue) => accumulator + currentValue;
export default connect(mapStateToProps)(Invoice);
