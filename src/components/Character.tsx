import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
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
  const episode = character.episode;
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
          <Link to={"/planets/:id" + character.location.id} style={{textDecoration: 'none', color: 'lightblue'}}>
            <Card.Text> Location: {character.location.name}</Card.Text>
          </Link>
          <p style={{marginTop: '20px'}}>This character has first appeared on this episode:</p>
          <div className="character-card-body">
            <div className="character-card-container">
              {episode.map((it, i) => (
                <Col key={i}>
                  <div className="character-card" key={i}>
                    <div className="face face1">
                      <div className="content">
                        <Link to={"/characters/" + it.id}>
                          <button className="btn draw-border">
                            <p>{it.name}</p>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="face face2">
                      <button className="btn draw-border">
                        <h2> Learn More!</h2>
                      </button>

                      {/* <img src={it.image} alt="Image of character"></img> */}
                    </div>
                  </div>
                </Col>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
