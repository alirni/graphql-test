import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {

  return (
    <>
    <div className="d-flex gap-3 mb-4"></div>
      <AddClientModal />
      <Projects />
      <hr />
      <Clients />
    </>
  );
};


export default Home;
