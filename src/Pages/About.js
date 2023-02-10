import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col,} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container >
                <Tab.Container  id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item  >
                                    <Nav.Link eventKey='first'>Откуда мы?</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Миссия</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Наша История</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Наша команда</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Наши клиенты</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <img src="https://phonoteka.org/uploads/posts/2021-05/1622174901_6-phonoteka_org-p-avtoservis-art-krasivo-7.jpg" alt='we' width={'600px'}></img>
                                    <p>Кто мы?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src="https://findesk.ru/upload/iblock/41f/41f99e1b31097e5e6de386a1622090d2.jpg" alt='we' width={'600px'}></img>
                                    <p> Наша миссия</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src="https://sun6-21.userapi.com/s/v1/if1/UIoudg6P1xA8ARHXtghBQHQPcXGUahVtIiLWm5z0bLymFmVSNBT6qhRGm_nLyaJe7nBmga8i.jpg?size=996x996&quality=96&crop=0,42,996,996&ava=1" alt='we' width={'600px'}></img>
                                    <p> Наша история</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src="https://alterainvest.ru/upload/iblock/9e1/9e15104e86fec47935285658731f5124.jpg" alt='we' width={'600px'}></img>
                                    <p> Наша команда</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src="https://carsmotion.ru/wp-content/uploads/2022/03/remont_inomarok.jpg" alt='we' width={'600px'}></img>
                                    <p> Наши клиенты</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}