import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_LOCATIONS } from "../assets/helpers/requests";
import { LoadingSpinner } from "../assets/helpers/Spinner";
import { InfintePlanets } from "../assets/helpers/InfiniteScrollPlanets";
import { LocationsData, ResponseVariable } from "../assets/helpers/interfaces";

export const Planets: React.FC = () => {
  const { loading, data } = useQuery<LocationsData, ResponseVariable>(
    FETCH_LOCATIONS,
    { variables: { page: 1 } }
  );
  if (loading || !data || !data.locations) {
    return (<div style={{marginTop: '20%'}}><LoadingSpinner /></div>);
  }
  const location = data.locations.results;

  return (
        <div className="character-card-body">
        <div className="character-card-container">
          {location.map((it, i) => (
            <Col key={i}>
              <div className="character-card" key={i}>
                <div className="face face1">
                  <div className="content">
                  <Link to={"/planets/" + it.id}>
                    <button className="btn draw-border">
                      Learn More!
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="face face2">
                  <h2>{it.name}</h2>
                </div>
              </div>
              {i === location.length - 5 && (<InfintePlanets/>)}
            </Col>
          ))}
        </div>
      </div>
  );
};
