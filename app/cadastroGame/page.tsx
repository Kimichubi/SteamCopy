"use client";
import Form from "../components/Form";

export default function CadastroGame() {
  return (
    <>
      <div className="min-h-screen relative p-4 block">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="https://media.tenor.com/83ZJ-JcmH_IAAAAd/game.gif"
          alt=""
        />
        <Form />
      </div>
    </>
  );
}
