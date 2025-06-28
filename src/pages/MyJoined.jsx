import React, { Suspense, use } from "react";
import JoinedEventRow from "../Components/JoinedEventRow";
import Loading from "../Components/Loading";
import { AuthContext } from "../context/AuthContext";

const myJoinedPromise = (email) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/jointevent?email=${email}`
  ).then((res) => res.json());
};

const MyJoined = () => {
  const { user } = use(AuthContext);
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <JoinedEventRow
          myJoinedPromise={myJoinedPromise(user.email)}
        ></JoinedEventRow>
      </Suspense>
    </>
  );
};

export default MyJoined;
