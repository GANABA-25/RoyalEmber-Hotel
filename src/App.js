import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/pages/homePage/HomePage";
import Rooms from "./pages/pages/rooms/Rooms";
import ThingsToDo from "./pages/pages/thingsToDo/ThingsToDo";
import Facilities from "./pages/pages/facilities/Facilities";
import Contact from "./pages/pages/contact/Contact";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/ThingsToDo" element={<ThingsToDo />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
