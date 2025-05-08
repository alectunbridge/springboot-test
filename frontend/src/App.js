import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        data: ""
    };

    async componentDidMount() {
        const response = await fetch('/api?surname=Syer');
        const body = await response.text();
        this.setState({data: body});
    }

    render() {
        const {data} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                {<p>Name: {data}</p>}
            </div>
        );
    }
}

export default App;
