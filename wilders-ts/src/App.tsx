import '../src/assets/styles/App.css';
import Wilder from './components/Wilder';
import styledComponents from 'styled-components';
import { useEffect, useState } from 'react';
import { IWilder } from "./interface/interface"
import AddWilder from './components/AddWilder';

const Title = styledComponents.h1`
font-size: 40px;
text-align: center;
color: white;
`;

const Container = styledComponents.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const Button = styledComponents.button`
  text-decoration: none;
  background-color: #f76c6c;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
`;

function App() {

  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isDelete, setIsDeleted] = useState(false)


  async function getWilders() {
    try {
      const res = await fetch('http://127.0.0.1:4000/api/wilders', { method: "GET" })
      const wilders = await res.json()
      setWilders(wilders);
    } catch (error: any) {
      setError(true);
    }
  }

  useEffect(() => {
    getWilders();
  }, [])
  useEffect(() => {
    console.log("update")
  }, [wilders])

  return (
    <div className="App">
      <header>
        <Container>
          <Title>
            Wilders Book
          </Title>
          <Button type="button" onClick={() => getWilders()}>Update</Button>
        </Container>
        <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
        {showForm === true && <AddWilder onWilderCreated={() => getWilders()} onError={() => setError(true)}></AddWilder>}
      </header>
      <h2>
        Wilders
      </h2>
      {wilders?.map((wilder, index) => <Wilder onWilderDeleted={() => getWilders()} onError={() => setError(true)} key={index} _id={wilder._id} name={wilder.name} city={wilder.city} skills={wilder.skills} image={wilder.image}/>)}
      <footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
