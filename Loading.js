import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <BounceLoader color="#36d7b7c2" size={70} /> */}
      <SyncLoader color="#36d7b7c2" size={10} />
    </div>
  );
}
