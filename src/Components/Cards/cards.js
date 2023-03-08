
import { Card, Button } from 'react-bootstrap';
import img1 from '../../assets/imgs/01.jpg';
import img2 from '../../assets/imgs/02.jpg';
import img3 from '../../assets/imgs/03.jpg';

import './Cards.scss';

export function Tarjetas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
            <Card.Title className="text-center">Campera Jet</Card.Title>
              <Card.Text className="text-center" >Campera inviero</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="my-custom-button">$15000</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
            <Card.Title className="text-center">Campera Street</Card.Title>
              <Card.Text className="text-center">Campera Primavera</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="my-custom-button">$10999</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
            <Card.Title className="text-center">Campera Fit</Card.Title>
              <Card.Text className="text-center">Campera Otoñal</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="my-custom-button">$9999</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
