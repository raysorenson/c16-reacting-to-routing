import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home Page</h1>
      <Link to="/films" className="btn btn-primary">
        View Films
      </Link>
      
      <Link to="/people" className="btn btn-primary">
        View People
      </Link>
      
    </>
  );
};

export default Home;