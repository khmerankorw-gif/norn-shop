import Main from "./Main";

export default function Footer() {
  return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#aaa",
          marginTop: "30px",
          backgroundColor: "#151515df",
          shadow: "0 0 10px rgba(0, 0, 0, 0.36)",
          marginBottom: "0",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Main>
            <div>
                contact us
            </div>
        </Main>
      </div>
  );
}
