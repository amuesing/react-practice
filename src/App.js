import React, {useState, useEffect} from 'react';
import DogContainer from './DogContainer'

const App = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/15')
    .then((r) => r.json())
    .then((data) => {
      setDogs(data.message)
    })
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      <header style={{ paddingBottom: 15 }}>
        Welcome to DogBook
      </header>
      <DogContainer dogs={dogs}/>
    </div>

  );
}

export default App;
