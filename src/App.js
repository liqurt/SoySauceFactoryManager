import MyNav from "./components/MainPage/myNav";
import Home from "./components/MainPage/Home";
import Room from "./components/MainPage/roomCreate";
import Meeting from "./components/MainPage/meetingpage";
import Error from "./components/Errorpage/Errorpage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/room" element={<Room />} />
        <Route exact={true} path="/meet" element={<Meeting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
