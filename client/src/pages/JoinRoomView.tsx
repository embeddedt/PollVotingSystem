import React, { ChangeEvent, FormEvent, useState } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router";

export const JoinRoomView = () => {
  const cookies = new Cookies();
  const [getRoomCode, setRoomCode] = useState("");
  const history = useHistory();

  const updateRoomCode = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Room Code: ", e.target.value);
    setRoomCode(e.target.value);
  };

  const joinRoom = (e: FormEvent<HTMLFormElement>) => {
    console.log("Setting Cookie: ", getRoomCode);
    if (getRoomCode !== "") {
      cookies.set("roomCode", getRoomCode);
      history.push("/student");
    }
    e.preventDefault();
  };

  const profLogin = () => {
    history.push("/prof");
  };

  return (
    <>
      {/* Can be div instead of a form lol*/}
      <form onSubmit={(e) => joinRoom(e)}>
        <input type={"text"} placeholder={"Join Room Code"} onChange={(e) => updateRoomCode(e)} value={getRoomCode} />
        <br />
        <input type={"submit"} value={"Join Room"} />
      </form>
      <input type={"Submit"} value={"Prof Login"} onClick={() => profLogin()} />
    </>
  );
};
