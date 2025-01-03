import logo from './logo.svg';
import DeleteAllDataByClick from './Component/DeleteAllDataByClick'
import Disable from './Component/Disable'
import Form from './Todo1/Form';
import LocalStorage from './LocalStorages/Store';
import Page from './Pagenation/Page'
import './App.css';
function App() {
  return (
    <div className="App">
      <Page/>
      <LocalStorage/>
    <DeleteAllDataByClick/>
    <Disable/>
    <Form/>
    </div>
  );
}

export default App;
