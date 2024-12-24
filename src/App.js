import logo from './logo.svg';
import DeleteAllDataByClick from './Component/DeleteAllDataByClick'
import Disable from './Component/Disable'
import Form from './Todo1/Form';
import './App.css';

function App() {
  return (
    <div className="App">
    <DeleteAllDataByClick/>
    <Disable/>
    <Form/>
    </div>
  );
}

export default App;
