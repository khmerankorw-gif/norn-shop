import { BarLoader } from "react-spinners";
export default function Spinner() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      ></div>
      <BarLoader color="#36d7b7c2" size={70} />
    </>
  );
}
