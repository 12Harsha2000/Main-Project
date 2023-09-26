import styled from "styled-components";
import ContactlistComponent from "./components/ContactlistComponents";
import ConversationComponent from "./components/ConversationComponents";


const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`

function App() {
  return (
  <Container>
    <ContactlistComponent/>
    <ConversationComponent/>
  </Container> 
  );
}

export default App;
