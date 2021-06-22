import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import World from './components/World';
import Person from './components/Person';
import Employee from './components/Employee';
import Parent from './components/Parent';
import StudentList from './components/StudentList';
import ProductList from './components/ProductList';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
        {/* <Hello />
        <World /> */}
        {/* <Person name="mark" email="m@gmail.com" age="30" />
        <Person name="paul" email="p@gmail.com" age="30"/>
        <Person name="watson" email="w@gmail.com" age="30"/> */}
        {/* <Employee name="mark" email="m@gmail.com" age="30" /> */}
        {/* <Parent/> */}
        {/* <StudentList /> */}
        {/* <ProductList /> */}
        <Form/>
    </div>
  );
}

export default App;
