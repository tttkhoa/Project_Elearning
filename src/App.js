import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../src/Components/Loader"
import renderRoutes from "./routes"
import RegisterCourseModal from "./pages/AdminTemplate/ManageUserPage/RegisterCourseModal";

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          <Route>
          {renderRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
