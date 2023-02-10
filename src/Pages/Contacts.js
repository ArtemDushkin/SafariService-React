import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container className='mt-3' style={{ width:'500px'}}>
                <h1 className='text-center'>Свяжитесь с нами</h1>
                <Form>
                    <Form.Group controlID='formBasicEmail'>
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control type="email" placeholder='Введите адрес Вашей электронной почты' />
                        <Form.Text>
                            *Мы ни с кем не полелимся адресом вашей электронной почты
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mt-3' controlID='formBasicPassword' >
                        <Form.Label>Введите Ваше сообщение</Form.Label>
                        <Form.Control as='textarea' rows='3'></Form.Control>
                    </Form.Group>

                    <Form.Group controlID='formBasiccheckBox' >
                        <Form.Check className='mt-3' type='checkbox' label='Я человек, а не машина'></Form.Check>
                    </Form.Group>
                    <Button className='mt-4' variant='warning' type='submit'>Отправить</Button>

                </Form>
            </Container>        
        )
    }
}