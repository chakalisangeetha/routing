import logo from './logo.svg';
// import Reusable from './ReusableConcept/Reusable';
// import Button from './ReusableConcept/Button';import Data from './Formik/Data'
import Calculate from './Calculater/Calculate';
import Data from './Formik/Data'
import Form from './FormAllCoverd/Form'
import Radio from './RadioButton/Radio';
import Radios from './RadioButton/Radios';
import Practise from './SwitchCase/Practise';
import OtherExamples from './IfCondition/OtherExamples';
import IfCndtn from './IfCondition/IfCndtn';
import Active from './ActiveInActive/Active'
import DeleteAllDataByClick from './DltalldatabyclickAndDisable/DeleteAllDataByClick'
import Disable from './DltalldatabyclickAndDisable/Disable'
import Page from './Pagenation/Page';
import Store from './LocalStorages/Store';
//  import Axios from './AxiosPostAndGet/Axios'
import Valid from './Validations/Valid'
import Password from './PasswordGenerator/Password';
import Async from './AsyncAndAwait/Async';
import Read from './ReadMoreAndLess/Read';
import Name from './UpdateSelInput/Name';
import EditDlt from './OnlyEditAndDlt/EditDlt';
import Examples from './LoginExamples/Examples';
import UseRef from './UseReference/UseRef';
import FilterList from './FilterExmple/FilterList';
import Filter2 from './FilterExmple/Filter2';
import Cart from './CountingIncAndDec/Cart';
import UseCallBack from './UseMemoAndCallBack/UseCallBack';
import UseMemo from './UseMemoAndCallBack/UseMemo';
import UseMemoCallBoth from './UseMemoAndCallBack/UseMemoCallBoth';
import RoutingPage from './RouterUsungParams/RoutingPage';
import Routepage from './FiveInputsTodo/RoutePage';
import Drop from './DropDown/Drop';
import Mapping from './MappingInsideMapping/Mapping';
import Box from './CheckBoxExample/Box';
import Switch from './SwitchCase/Switch';
import EvenOdd from './SwitchCase/EvenOdd';
import Dates from './DatesExample/Dates'
import Fact from './Factorial/Fact'
import Fetch from './FetchAndMock/FetchData';
import Conditional from './CndtnlOprWthTwoAryOfObjects/Conditional';
import Multiple from './LoopngMulVariablesAtAtime/Multiple';
import SearchFilter from './Search and Filter/SearchFilter';
import Accending from './AccendingAndDecending/Accending';
import ContextProv from './ContextProvUsingRouting/ContextProv';
import ContextRoute from './ContextProvUsingRouting/ContextRoute';
import Replacing from './ReplacingNameWithOtherName/Replacing';
import Cases from './TestCases/Cases'
function App() {
  return (
    <div>
            <Calculate />

      {/* <Reusable/> */}
      <Replacing/>
      <Data />
      <Form />
      <Radio />
      < Radios />
      <Practise />
      <OtherExamples />
      <IfCndtn />
      <Cases a={40} b={60} />
      {/* <Button/>
    <Reusable/> */}
      < ContextProv>
        <ContextRoute />
      </ ContextProv>
      <Accending />
      <SearchFilter />
      <Multiple />
      <Conditional />
      <Fetch />
      <Fact />
      <Dates />
      <Switch />
      <EvenOdd />
      <Switch />
      <Box />
      <Mapping />
      <Drop />
      <Routepage />
      <RoutingPage />
      <UseCallBack />
      <UseMemo />
      <UseMemoCallBoth />
      < Cart />
      <FilterList />
      <Filter2 />
      < UseRef />
      <Examples />
      <EditDlt />
      <Name />
      <Read />
      <Async />
      <Password />
      {/* <Valid /> */}
      {/*    
    <Fetch/> */}
      {/* <Axios/> */}
      <Page />
      <Store />
      <DeleteAllDataByClick />
      <Disable />
      < Active />
      {/* dD6EfEWjNii3FXG */}
    </div>
  );
}
export default App;
