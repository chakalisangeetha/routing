import logo from './logo.svg';
import DeleteAllDataByClick from './DltAndDisable/DeleteAllDataByClick'
import Disable from './DltAndDisable/Disable'
import Page from './Pagenation/Page';
import Store from './LocalStorages/Store';
// import RouterPage from './FormAllCoverd/ RouterPage '
//  import Axios from './AxiosPostAndGet/Axios'
import Form from './FormAllCoverd/Form'
import Data from './Formik/Data';
import Valid from './Validations/Valid'
import './App.css';
function App() {
  return (
    <div className="App">
      <Valid/> 
      <Data />
      {/* <Axios/> */}
      <Page />
      {/* <RouterPage /> */}
      <Form/>
      <Store />
      <DeleteAllDataByClick />
      <Disable />
    </div>
  );
}
export default App;
