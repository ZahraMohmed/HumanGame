const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const Body = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />
);
const Right_Arm = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate:"-30deg",
      transformOrigin:"left bottom "
    }}
  />)
const Left_Arm = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate:"30deg",
      transformOrigin:"right bottom "
    }}
  />
);
const Right_Leg = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate:"60deg",
      transformOrigin:"left bottom "
    }}
  />)
const Left_Leg = (
  <div
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "0px",
      rotate:"-60deg",
      transformOrigin:"right bottom "
    }}
  />
);
const ALL_BODY = [ Head,Body,Right_Arm ,Left_Arm ,Right_Leg , Left_Leg ]
type HumanDrawingProps = {
  incorrectLetters:number
}
function HumanDrawing({incorrectLetters}:HumanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
    {ALL_BODY.slice(0,incorrectLetters)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}

export default HumanDrawing;
