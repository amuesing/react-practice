import DogCard from './DogCard'

const DogContainer = ({dogs}) => {

    const dogsArray = dogs.map((dogURL) =>{
        return <DogCard key={dogURL} url={dogURL}/>
    })

    return ( 
        <div className="container">
            {dogsArray}
        </div>
    )
}

export default DogContainer;