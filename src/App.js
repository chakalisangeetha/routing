import logo from './logo.svg';
import DeleteAllDataByClick from './DltAndDisable/DeleteAllDataByClick'
import Disable from './DltAndDisable/Disable'
import Page from './Pagenation/Page';
import Store from './LocalStorages/Store';
//  import Axios from './AxiosPostAndGet/Axios'
import Form from './FormAllCoverd/Form'
import Data from './Formik/Data';
// import Valid from './Validations/Valid'
import Password from './PasswordGenerator/Password'
import './App.css';
function App() {

  return (
    <div className="App">
      <Password/>
      {/* <Valid /> */}
      <Data />
      {/* <Axios/> */}
      <Page />
      <Form />
      <Store />
      <DeleteAllDataByClick />
      <Disable />
    </div>
  );
}
export default App;
