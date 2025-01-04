import logo from './logo.svg';
import DeleteAllDataByClick from './DltAndDisable/DeleteAllDataByClick'
import Disable from './DltAndDisable/Disable'
import Form from './TodoAllCovered/Form';
import LocalStorage from './LocalStorages/Store';
import Page from './Pagenation/Page'
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <Page/> */}
      <LocalStorage/>
    {/* <DeleteAllDataByClick/> */}
    <Disable/>
    <Form/>
    </div>
  );
}
export default App;
