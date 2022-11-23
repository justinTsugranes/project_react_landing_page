import React from 'react'
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap'

const Features = () => {
  return (
    <Container fluid>
      <CardGroup className='m-4 p-5'>
        <Row xs={1} md={2} lg={4} className='g-4 d-flex justify-content-center'>
          <Col>
            <Card>
              <Card.Img
                variant='top'
                width=''
                height='300'
                src='https://picsum.photos/seed/picsum/200/300'
              />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant='top'
                width=''
                height='300'
                src='https://picsum.photos/seed/picsum/200/300'
              />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant='top'
                width=''
                height='300'
                src='https://picsum.photos/seed/picsum/200/300'
              />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant='top'
                width=''
                height='300'
                src='https://picsum.photos/seed/picsum/200/300'
              />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  )
}

export default Features