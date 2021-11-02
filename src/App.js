import logo from './logo.svg';
import './App.css';
import React from 'react';

class Comp01 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Comp02 extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
  }
}

class Comp03 extends React.Component {
  render() {
    return <h3>Hello, {this.props.name}</h3>;
  }
}

class Comp04 extends React.Component {
  render() {
    return <h4>Hello, {this.props.name}</h4>;
  }
}

class Comp05 extends React.Component {
  render() {
    return <h5>Hello, {this.props.name}</h5>;
  }
}

class Comp06 extends React.Component {
  render() {
    return <h6>Hello, {this.props.name}</h6>;
  }
}

class ActionComp extends React.Component {
  render() {
    return <p>하위 컴포넌트에서 상위 데이터를 바꾸는 이벤트를 주고싶었으나 시간이 없어서 실패</p>;
  }
}

class Bottom extends React.Component {
  render() {
    return (<p>
      제 이름은 <b>{this.props.name}</b> 입니다.<br/>
      하지만 버튼을 누르면 바뀔수도?
    </p>);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Joo'
    };

    // 콜백 이벤트에서 this 사용
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({
      name: 'JOOOOOOOOOOOO'
    });
  }
  
  render() {
    return (
      <div className="App">
        <Comp01 name={this.state.name}/>
        <Comp02 name={this.state.name}/>
        <Comp03 name={this.state.name}/>
        <Comp04 name={this.state.name}/>
        <Comp05 name={this.state.name}/>
        <Comp06 name={this.state.name}/>
        <ActionComp func={this.changeName} />
        <Bottom name={this.state.name}/>
        <button onClick={this.changeName}>Change</button>
      </div>
    )
  };
}

export default App;
