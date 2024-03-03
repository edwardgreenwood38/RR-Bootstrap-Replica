import Card from 'react-bootstrap/Card'


function LocationForm(){
    return (
        <div>
            <Card style={{ width: '30rem', backgroundColor: 'aqua' }}>
            <Card.Body>
                <Card.Title><h2>Order groceries for delivery or pickup today</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Whatever you want from local stores, brought right to your door.</Card.Subtitle>
                <Card.Text>
                    <input id="Location" name="Location" placeholder='Enter zip' />
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
            </Card>
        </div>
    )
}


export default LocationForm;
