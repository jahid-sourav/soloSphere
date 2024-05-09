import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      {/* Header Starts Here */}
      <Navbar />
      {/* Header Ends Here */}

      {/* Outlet Starts Here */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Outlet Ends Here */}

      {/* Footer Starts Here */}
      <Footer />
      {/* Footer Ends Here */}
    </>
  );
}

export default MainLayout;
