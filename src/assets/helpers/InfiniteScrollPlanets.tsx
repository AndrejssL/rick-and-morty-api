import React from "react";
import { Waypoint } from "react-waypoint";
import { LocationsData, ResponseVariable } from "./interfaces";
import { useQuery } from "@apollo/react-hooks";
import { LoadingSpinner } from "./Spinner";
import { FETCH_LOCATIONS } from "./requests";

export const InfintePlanets: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<
    LocationsData,
    ResponseVariable
  >(FETCH_LOCATIONS, { variables: { page: 1 } });
  if (loading || !data || !data.locations) {
    return <LoadingSpinner />;
  }
  const location = data.locations.results;

  const scrollOnEnd = () =>
    fetchMore({
      variables: {
        page: location.length / 20 + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          locations: {
            __typename: "Locations",
            results: [
              ...prev.locations.results,
              ...fetchMoreResult.locations.results
            ]
          }
        };
      }
    });
  return (
    <Waypoint
      onEnter={() => {
        scrollOnEnd();
      }}
    ></Waypoint>
  );
};
