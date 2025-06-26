import React, { Suspense, use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import MyeventList from "../Components/MyeventList";
import axios from "axios";

const myEventsPromise = (email) => {
  return axios
    .get(`http://localhost:3000/jointevent?email=${email}`)
    .then((res) => res.data);
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
