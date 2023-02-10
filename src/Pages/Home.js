import React, { Component } from 'react'
import CarouselBox from '../Component/caruselbox'
import { Container, Card, Button,  CardGroup } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
    <>
        <CarouselBox />
        <Container>
            <h2 className='text-centr m-4'>Отличный сервис для каждого</h2>
            <CardGroup >
                <Card className='m-1'>
                    <Card.Img variant='top' src='https://previews.123rf.com/images/milkos/milkos2006/milkos200601858/148632430-successful-deal.-car-seller-handshaking-with-happy-auto-buyer-couple-standing-in-dealership-store,-selective-focus.jpg'>
                    </Card.Img>
                    <Card.Body>
                        <Card.Title>Консультанты</Card.Title>
                        <Card.Text> Объяснят все и все организуют</Card.Text>
                        <Button variant='warning'>Подробнее</Button>
                    </Card.Body>
                </Card>
                <Card className='m-1'>
                    <Card.Img variant='top' src='https://previews.123rf.com/images/kuprevich/kuprevich2107/kuprevich210700476/171628505-foreman-in-service-repair-center-diagnoses-parts-on-motorcycle.jpg'>
                    </Card.Img>
                    <Card.Body>
                        <Card.Title>Мастера</Card.Title>
                        <Card.Text> Знают больше всех о Вашем Авто</Card.Text>
                        <Button variant='warning'>Подробнее</Button>
                    </Card.Body>
                </Card>
                <Card className='m-1'>
                    <Card.Img variant='top' src='https://previews.123rf.com/images/harbucks/harbucks2102/harbucks210200159/164036663-handsome-mechanic-in-uniform-is-making-notes-examining-car-in-auto-service.jpg'>
                    </Card.Img>
                    <Card.Body>
                        <Card.Title>Механики</Card.Title>
                        <Card.Text> У них все всегда как надо</Card.Text>
                        <Button variant='warning'>Подробнее</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    </>
        )
    }
}