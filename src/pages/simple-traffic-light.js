import { useState } from "react";

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{
        margin: "16px",
        padding: "12px 20px",
        color: textColor,
        backgroundColor: bgColor,
        borderRadius: "8px",
        border: "1px solid black",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function LightBulb({ bgColor }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: bgColor,
        borderRadius: "50%",
        margin: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.125)",
        border: "1px solid rgba(0, 0, 0, 0.125)",
      }}
    ></div>
  );
}

function SimpleTrafficLightPage() {
  const [redOn, setRedOn] = useState(false);
  const [greenOn, setGreenOn] = useState(false);
  const [blueOn, setBlueOn] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: "#171717",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Button
          textColor="white"
          bgColor="red"
          onClick={function () {
            setRedOn(!redOn);
          }}
        >
          RED
        </Button>
        <Button
          textColor="white"
          bgColor="green"
          onClick={function () {
            setGreenOn(!greenOn);
          }}
        >
          GREEN
        </Button>
        <Button
          textColor="white"
          bgColor="blue"
          onClick={function () {
            setBlueOn(!blueOn);
          }}
        >
          BLUE
        </Button>
      </div>

      <LightBulb bgColor={redOn ? "red" : "white"} />
      <LightBulb bgColor={greenOn ? "green" : "white"} />
      <LightBulb bgColor={blueOn ? "blue" : "white"} />
    </div>
  );
}

export default SimpleTrafficLightPage;
