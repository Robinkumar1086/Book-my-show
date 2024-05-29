import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header/indx";
import ProtectedRoute from "./routes/ProtectedRoute";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Adminprofile= lazy(()=> import("./pages/Adminprofile"))
const Userprofile= lazy(()=> import("./pages/profile/index.jsx"))
const Appcontainer= lazy(()=> import("./routes/Appcontainer.jsx"))

export default function App() {
  return (
    <Router> 
      <AppContent />
    </Router>
  ); 
}

function AppContent() {
  const location = useLocation();
  const shouldheadershow = !["/login", "/register"].includes(location.pathname);

  return (
    <>
      {shouldheadershow && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index="true" element = {<Appcontainer><Homepage/></Appcontainer>}/> 
            <Route path="/admin" element = {<Adminprofile/>}/> 
            <Route path="/user" element = {<Userprofile/>}/> 
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
