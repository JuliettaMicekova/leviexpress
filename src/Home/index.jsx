import React from 'react';
import { JourneyPicker } from './JourneyPicker';
import { useState } from 'react';
import { JourneyDetail } from './JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (props) => {
    setJourney(props);
    console.log(props);
  };

  return (
    <>
      <h2>Doma</h2>
      {console.log(journey)}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/*  {journey ? <p>Nalezeno spojeni s id {journey.journeyId}</p> : null} */}
      {journey ? <JourneyDetail journey={journey} /> : null}
    </>
  );
};
