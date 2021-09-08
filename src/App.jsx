import React, { Component } from "react";
import dataJson from "./components/data.json";


export default class App extends Component {
  state = {
    historia: "",
    opcionA: "",
    opcionB: "",
    opcionActual: "",
    listaOpciones: []
  };

  contador = 1;

  handleA = () => {
    this.contador++;
    for (let i = 0; i < dataJson.length; i++) {
      let dataA = dataJson[i].id;
      if (dataA === this.contador + "a") {
        this.setState({ 
          historia: dataJson[i].historia,
          opcionActual: "A",
          opcionA:dataJson[i].opciones.a,
          opcionB:dataJson[i].opciones.b});
        this.state.listaOpciones.push("A")
      }
    }
  };
  handleB = () => {
    this.contador++;
    for (let i = 0; i < dataJson.length; i++) {
      let dataA = dataJson[i].id;
      if (dataA === this.contador + "b") {
        this.setState({ historia: dataJson[i].historia, opcionActual: "B",opcionA:dataJson[i].opciones.a,opcionB:dataJson[i].opciones.b});
        this.state.listaOpciones.push("B")
      }
    }
  };
  componentDidMount(){
    this.setState({
      historia:dataJson[0].historia,
      opcionA: dataJson[0].opciones.a,
      opcionB: dataJson[0].opciones.b
    })
  }

  listadoOpciones = (props,index) =>{
    const items = props.items;
    const listItems = items.map((item)=>
      <li key={index}>{item}</li>    
    )
    return(
      <ul>{listItems}</ul>
    )
  }
  
  render() {
    return (
      <React.Fragment>
        <section className= "layout">
        <h1 className="historia">{this.state.historia}</h1>
        <div className= "opciones">
          <button className="botones" onClick={this.handleA}>A</button>
          <h3>{this.state.opcionA}</h3>
          <button className="botones" onClick={this.handleB}>B</button>
          <h3>{this.state.opcionB}</h3>
        </div>
        <div className="recordatorio">
          <h3>Seleccion Anterior: {this.state.opcionActual}</h3>
          <h3>Historial de opciones elegidas:</h3>
          <this.listadoOpciones items={this.state.listaOpciones}/>
        </div>
        </section>
      </React.Fragment>
    );
  }
}
