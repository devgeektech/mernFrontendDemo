import React from 'react';

import { Col, Container, Row, Card } from 'react-bootstrap';

const Settings = () => {
  return (
    <>
      <Container fluid className="addNewUserPage">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3 mt-4">
            <Card>
              <p>Settings</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Settings;
