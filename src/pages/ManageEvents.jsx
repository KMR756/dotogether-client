import React, { Suspense, use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import MyeventList from "../Components/MyeventList";

const myEventsPromise = (email) => {
  return fetch(`http://localhost:3000/jointevent?email=${email}`).then((res) =>
    res.json()
  );
};

const ManageEvents = () => {
  const { user } = use(AuthContext);
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <MyeventList
          myEventsPromise={myEventsPromise(user.email)}
        ></MyeventList>
      </Suspense>
    </>
  );
};

export default ManageEvents;
