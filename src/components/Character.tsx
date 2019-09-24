import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Card, Nav, Tab, Row, Col, ListGroup } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { LoadingSpinner } from "../assets/helpers/Spinner";
import {
  CharacterData,
  MatchParams,
  CharacterVariables
} from "../assets//helpers/interfaces";
import { FETCH_CHARACTER } from "../assets/helpers/requests";

export const Character: React.FC<RouteComponentProps<MatchParams>> = ({
  match
}) => {
  const { loading, data } = useQuery<CharacterData, CharacterVariables>(
    FETCH_CHARACTER,
    { variables: { id: parseInt(match.params.id) } }
  );
  if (loading || !data || !data.character) {
    return <LoadingSpinner />;
  }
  const character = data.character;
  return (
    <div className="characterCardContainer">
      <Card className="characterCard">
        <Card.Img
          variant="top"
          src={character.image}
          alt="Characters Planet"
          className="cardImage"
        />
        <Card.Body>
          <Card.Title className="characterTitle"> {character.name}</Card.Title>
          <Card.Text> Status: {character.status}</Card.Text>
          <Card.Text> Species: {character.species}</Card.Text>
          <Card.Text> Origin: {character.origin.name}</Card.Text>
          <Card.Text> Gender: {character.gender}</Card.Text>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Episodes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Planets</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <ListGroup>
                      This character has first appeared on this episode:
                      <ListGroup.Item variant="dark">
                        {character.episode.map(it => it.name + ", ")}
                      </ListGroup.Item>
                    </ListGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Sorry, if you see this!</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          <a data-label="planets" href="/planets" className="FooterLinks" >
            <Link
              to={"/planets/:id" + character.location.id}
              style={{ textDecoration: "none", marginTop: '30px', textAlign: 'center'}}
            >
              Learn more about this characters planet!
            </Link>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
