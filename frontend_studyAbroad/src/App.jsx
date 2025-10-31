import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
