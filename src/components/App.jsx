import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  
  return (
    <div style={{ margin: '50px auto', paddingTop: '10px', width: '500px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: ' 5px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)' }}>
      <h1 style={{ marginLeft: '15px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ marginLeft: '25px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
