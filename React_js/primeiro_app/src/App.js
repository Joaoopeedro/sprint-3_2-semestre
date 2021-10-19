
import react from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horario atual : {props.date.toLocaleTimeString()}</h2>
}

//Componente de classe
class Clock extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Define a propiedade date pagdn a hora e data atual
      date: new Date()
    }
  }

  //Ciclo de vida  que ocorre quando o componente clock é inserido na arvore DOM, ou seja , ciclo de vida de nascimento
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da arvore DOM 
  componentWillUnmount() {
    clearInterval(this.TimerID)

  };

  thick() {
    this.setState({
      date: new Date()
    })
  };

  Pausar(){
    this.componentWillUnmount()
    console.log('Relógio ' + this.TimerID + ' está pausado')
  }

  Retomar(){
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
    console.log('Relógio retomado')
    console.log('Agora sou o relogio '+ this.TimerID)
  }
  
 

  //Renderiza o conteudo do retorno para a tela 
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button className="bnt_1" onClick={() => this.Pausar()}>Pausar</button>
        <button className="bnt_2" onClick={() => this.Retomar()}>Retomar</button>
        
      </div>
    )
  }
}

//Componente de classe
class Clock1 extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Define a propiedade date pagdn a hora e data atual
      date: new Date()
    }
  }

  //Ciclo de vida  que ocorre quando o componente clock é inserido na arvore DOM, ou seja , ciclo de vida de nascimento
  componentDidMount() {
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da arvore DOM 
  componentWillUnmount() {
    clearInterval(this.TimerID)

  };

  thick() {
    this.setState({
      date: new Date()
    })
  };

  Pausar(){
    this.componentWillUnmount()
    console.log('Relógio ' + this.TimerID + ' está pausado')
  }

  Retomar(){
    this.TimerID = setInterval(() => {
      this.thick()
    }, 1000)
    console.log('Relógio retomado')
    console.log('Agora sou o relogio '+ this.TimerID)
  }
  
 

  //Renderiza o conteudo do retorno para a tela 
  render() {
    return (
      <div>
        <h1>Relógio infinito</h1>
        <DataFormatada date={this.state.date} />
        
        
      </div>
    )
  }
}


// Componente princiapl
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock1 />
      </header>
    </div>
  );
}

export default App;
