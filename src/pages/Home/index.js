import VeiacosTable from "../../components/VeiacosTable";

export default function Home() {
  return (
    <div className="container-app">
      <div className="home">
        <div className="ranking">
          <div className="left-content"></div>
        </div>

        <div className="dashboard">
          <div>
            <h1>Dashboard</h1>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <VeiacosTable quantidadeVeiacos={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
