import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {

  const contacts = [
    {
      "id": 1,
      "name": "John",
      "email": "john@mail.com"
    },
    {
      "id": 2,
      "name": "Vin",
      "email": "vin@mail.com"
    }
  ]
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
