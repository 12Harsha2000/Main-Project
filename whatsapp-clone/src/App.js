import React, { useState } from 'react';
import styled from 'styled-components';
import ContactListComponent from './components/ContactlistComponents';
import ConversationComponent from './components/ConversationComponents';
import { contactList, messagesList } from './Data';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <Container>
      <ContactListComponent onSelectContact={(contact) => setSelectedContact(contact)} />
      {selectedContact && <ConversationComponent selectedContact={selectedContact} messages={messagesList} />}
    </Container>
  );
}

export default App;