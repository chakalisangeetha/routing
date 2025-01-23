import logo from './logo.svg';
import DeleteAllDataByClick from './DltalldatabyclickAndDisable/DeleteAllDataByClick'
import Disable from './DltalldatabyclickAndDisable/Disable'
import Page from './Pagenation/Page';
import Store from './LocalStorages/Store';
//  import Axios from './AxiosPostAndGet/Axios'
import Form from './FormAllCoverd/Form'
import Data from './Formik/Data';
  import Valid from './Validations/Valid'
import Password from './PasswordGenerator/Password';
import Async from './AsyncAndAwait/Async';
import Read from './ReadMoreAndLess/Read';
import Name from './UpdateSelInput/Name';
import EditDlt from './OnlyEditAndDlt/EditDlt';
import Ascending from './AscendingDecending/Ascending';
import Active from './ActiveInActive/Active';
import Examples from './SomeExamples/Examples';
import UseRef from './UseReference/UseRef';
import FilterList from './FilterExmple/FilterList';
import Filter2 from './FilterExmple/Filter2';
import Cart from './CountingIncAndDec/Cart';
import UseCallBack from './UseMemoAndCallBack/UseCallBack';
import UseMemo from './UseMemoAndCallBack/UseMemo';
import UseMemoCallBoth from  './UseMemoAndCallBack/UseMemoCallBoth';
import Calculate from './Calculater/Calculate';
import RoutingPage from './RouterUsungParams/RoutingPage';
import Routepage from './FiveInputsTodo/RoutePage';
function App() {
  return ( 
    <div className="App">
      <Routepage/>
      <RoutingPage />
      <Calculate/>
    <UseCallBack/>
    <UseMemo/>
    <UseMemoCallBoth/>
      < Cart/>
      <FilterList/>
      <Filter2/>
      < UseRef/>
      <Examples/>
      < Ascending />
      <EditDlt/>
      <Name/>
      <Read />
      <Async/>
      <Password/>
      {/* <Valid /> */}
      <Data />
      {/* <Axios/> */}
       <Page />
      <Form />
      <Store />
      <DeleteAllDataByClick />
      <Disable />
     < Active />
    </div>
  );
}
export default App;
