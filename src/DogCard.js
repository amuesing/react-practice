import faker from 'faker';

const DogCard = ({url}) => {

    return (
        <div className="child">
            <img src={url} style={{ width: 300, height: 300, objectFit: 'cover' }}/>
        <form>
            <input type="checkbox" id="good-boy" name="good-boy" value="Good Boy"/>
            <label style={{ fontSize: 'large' }}>Is {faker.name.firstName()} a good boy?</label>
        </form>
        </div>
    )
}

export default DogCard