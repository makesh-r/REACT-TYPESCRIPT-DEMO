import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Input from './components/Input';
import Containers from './components/Containers';
import LoggedIn from './components/state/LoggedIn';
// import User from './components/state/User';
// import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import MutableRef from './components/ref/MutableRef';
import Counter from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      {/* <Greet name='Makesh' isLoggedIn={false}/> */}
      {/* <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status='loading'/> */}
      {/* <Heading>Placeholder text.</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Makesh</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id);
      }}/> */}
      {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
      {/* <Containers styles={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <MutableRef/> */}
      {/* <Counter message='The count value is '/> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <List 
      items={['Batman', 'Superman', 'Wonder woman']}
      onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position='center-top'/> */}
    </div>
  );
}

export default App;
