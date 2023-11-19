import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Login from "./pages/Login Page/Login";
import Daftar from "./pages/Register Page/Register";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/market" element={<Market />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Daftar/>} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
}
export default App;