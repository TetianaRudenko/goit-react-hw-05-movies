import { apiService } from "services/apiService";
import { HomeComponent } from "../components/Home/Home";

const Home = () => {
  
  return (
    <main>
      <HomeComponent data={apiService} />
    </main>
  );
};

export default Home;