import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {

      const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Bem-vindo ao SAP</h1>
        <p>Este é o sistema de gerenciamento de mercadorias.</p>
      </div>
    </>
  );
}
export default Home;