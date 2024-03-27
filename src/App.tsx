import './App.css'
import { Button } from './components/props/Button'
import { Container } from './components/props/Container'
import { Greet } from './components/props/Greet'
import { Heading } from './components/props/Heading'
import { Input } from './components/props/Input'
import { Oscar } from './components/props/Oscar'
import { Person } from './components/props/Person'
import { PersonList } from './components/props/PersonList'
import { Status } from './components/props/Status'
import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'

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
    <>
     <div className='App'>
     {/* <Greet name='vishwas' messageCount={23} isLoggedIn={true}/>
     <Person name={personName}/>
    <PersonList names={nameList} />
      <Status status='loading' />
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading> Placeholder text</Heading>
     </Oscar>
      <Greet name='Zido'  isLoggedIn={false} />
    <Button handleClick={(event, id) => {
      console.log('Button Clicked', event, id);
     }} />
     <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
      <LoggedIn />
      <User />
     </div>
    </>
  )
}

export default App
