import React from 'react'
import { Episode } from '../assets/helpers/interfaces'
import { Card } from 'react-bootstrap'

type CardProps = {
  className?: string,
  props: Episode,
}

export const EpisodeCard: React.FC<CardProps> = ({ props }) => {
  return (
        <div className="characterCardContainer">
        <Card className="characterCard">
          <Card.Body>
            <Card.Title className="characterTitle">{props.name}</Card.Title>
            <Card.Text> Episode: {props.episode}</Card.Text>
          </Card.Body>
        </Card>
      </div>
  )
}