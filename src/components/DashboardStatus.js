import logoSmall from "../assets/images/logos/logo-small.svg";

export default function DashboardStatus() {
  return (
    <div>
      <div className="box-dashboard">
        <div>
          <img src={logoSmall} alt="Logo veiacos" />
        </div>
        <div>
          <label className="box-title">Veiacos</label>
          <br />
          <label className="box-value">54</label>
        </div>
      </div>
    </div>
  );
}
