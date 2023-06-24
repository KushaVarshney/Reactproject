/*function ReleaseCard({album, artist, image, url, id}) {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt={`Album art of ${album}`}/>
            <div className="card-body">
                <h5 className="card-title"> {album} </h5>
                <p className="card-text">{artist}</p>
                <a href={url} className="btn btn-primary">Listen on Spotify</a>
            </div>
        </div>    
    )
}
export default ReleaseCard; */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Item.name}</Card.Title>
        <Card.Text>
        {item["artists"][0]["name"]}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;