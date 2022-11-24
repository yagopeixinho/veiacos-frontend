import VeiacosTable from "../../components/VeiacosTable";

export default function Home() {

  return (
    <div className="home">
      <div className="ranking"></div>
      <div className="dashboard">
        <h1>Dashboard</h1>

        <div>
          <button>Botão 1</button>
          <button>Botão 1</button>
          <button>Botão 1</button>
          <button>Botão 1</button>
        </div>

        <div>
          <h2>Mais novos veiacos!</h2>
        </div>

        <VeiacosTable />
      </div>
    </div>
  );
}
