import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // num:なんでもOK　setNum:numに対して動的に変化する値
  const [num, setNum] = useState(1);
  const [face, setFace] = useState(false);

  const onClickCountUp = () => {
    // numに対してsetNumがどのように変化するのか()内で指示できる
    setNum(num + 1);
  };

  const onClickFace = () => {
    setFace(!face);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      face || setFace(true);
    } else {
      face && setFace(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickFace}>on / off</button>
      <p>{num}</p>
      {face && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
