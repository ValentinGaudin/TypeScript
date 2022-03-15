// import '../src/assets/styles/App.css';
// import Wilder from './components/Wilder';
// import styledComponents from 'styled-components';
// import { useEffect, useState } from 'react';
// import { stringify } from 'querystring';
// import Skill from './components/Skill';
// // import AddWilder from './components/AddWilder';


// function App() {
//   const [wilders, setWilders] = useState(Wilder);
//   const [error, setError] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [isDelete, setIsDeleted] = useState(false)

//   const widlers = new Wilder('Val', 'Val', [this.skill.title:])

//   async function getWilders() {
//     try {
//       const res = await fetch('http://127.0.0.1:4000/api/wilders', { method: "GET" })
//       const wilders = await res.json()
//       setWilders(wilders);
//     } catch (error) {
//       setError(true);
//     }
//   }

//   useEffect(() => {
//     getWilder();
//   }, [])
//   useEffect(() => {
//     console.log("update")
//   }, [wilders])


//   const Title = styledComponents.h1`
//   font-size: 40px;
//   text-align: center;
//   color: white;
//   `;

//   const Container = styledComponents.div`
//     max-width: 800px;
//     margin-left: auto;
//     margin-right: auto;
//     padding: 24px;
//   `;

//   const Button = styledComponents.button`
//     text-decoration: none;
//     background-color: #f76c6c;
//     color: #fff;
//     padding: 0.5em 1em;
//     border-radius: 4px;
//     display: inline-block;
//   `;
//   return (
//     <div className="App">
//       <header>
//         <Container>
//           <Title>
//             Wilders Book
//           </Title>
//           <Button type="button" onClick={() => getWilders()}>Update</Button>
//         </Container>
//         {/* <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
//         {showForm === true && <AddWilder onWilderCreated={() => getWilders()} onError={() => setError(true)}></AddWilder>} */}
//       </header>
//       <h2>
//         Wilders
//       </h2>
//       {wilders?.map((wilder, index) => <Wilder onWilderDeleted={() => getWilders()} onError={() => setError(true)} key={index} {...wilder} />)} */}
//       <footer>
//         <Container>
//           <p>&copy; 2022 Wild Code School</p>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default App;
