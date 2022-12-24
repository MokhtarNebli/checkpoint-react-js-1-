import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import ProfilePhoto from './profile/ProfilePhoto';
import  FullName  from './profile/FullName';
import  Address  from './profile/Address'




function App() {
  return (
    <div className='form'>
      
    <ProfilePhoto/>
    <FullName/>
    <Address/>
      
  
    </div>
  );
}

export default App;






