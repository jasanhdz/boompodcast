import react from "react";

const about = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        img {
          max-width: 30%;
          color: white;
        }
        h2 {
          color: white;
        }
        .container p {
          color: gray;
        }
      `}</style>
      <img src="../static/platzi-logo.png" alt="YOLO" />
      <h2>Creado por YO</h2>
      <p>Curso de Next.Js en platzi</p>
      <style jsx global>{`
        body {
          background: #1c3643;
        }
      `}</style>
    </div>
  );
};

export default about;
