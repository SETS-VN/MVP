import {Carousel, Item} from 'react-bootstrap';

export default function CarouSel() {
    return(
        <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1617731355275-cce5d98ddfbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1617731355275-cce5d98ddfbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1617731355275-cce5d98ddfbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel> 
        </div>
    )
}