import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {

  const getData = (name) => {

    alert(`Your name is ${name}`)

  }

  return (
    <div className="App">
     <Form onClick = {getData}/>
    </div>
  );
}

export default App;
