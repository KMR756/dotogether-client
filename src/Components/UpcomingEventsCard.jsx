import React from "react";

const UpcomingEventsCard = ({ event }) => {
  const { title, photoURL } = event;
  console.log(event);

  return (
    <div>
      {title}
      <img src={photoURL} alt="" />
    </div>
  );
};

export default UpcomingEventsCard;
