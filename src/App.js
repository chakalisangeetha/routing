import logo from './logo.svg';
import DeleteAllDataByClick from './DltAndDisable/DeleteAllDataByClick'
import Disable from './DltAndDisable/Disable'
import Page from './Pagenation/Page';
import Store from './LocalStorages/Store';
import Form from './FormAllCoverd/Form'
import Axios from './AxiosPostAndGet/Axios'
import './App.css';
function App() {
  return (
    <div className="App">
      <Axios/>
      <Page/>
      <Form/>
    <Store/>
     <DeleteAllDataByClick/>
    <Disable/>
    </div>
  );
}
export default App;
