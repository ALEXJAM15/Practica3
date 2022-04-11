import Card from "./Components/Card";

function App() {
  let persona ={
    "id": 1,
    "name": "Carolina Leyva",
    "username": "Carito",
    "email": "Carol@gmail.com",
    "phone": "(662)158 6452",
    "website": "Carol@gmail.com",
  };
  let persona2 ={
    "id": 1,
    "name": "Alejandro Jaime",
    "username": "Alex",
    "email": "Alejandro@gmail.com",
    "phone": "(662)158 2907",
    "website": "Alejandro@gmail.com",
  };
  return (
    <div>
    <Card
          persona={persona}
    />
        <Card
          persona={persona2}
    />
    </div>
  );
}

export default App;