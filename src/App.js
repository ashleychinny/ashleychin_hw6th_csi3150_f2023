import React from "react";
import Hero from "./components/Hero";
import TravelBlog from "./components/TravelBlog";
import TravelData from "./TravelData";

function App() {
  return (
    <main>
      <div className="overflow-y-hidden">
        <Hero />
      </div>
      {TravelData.map((place) => (
        <div className="overflow-hidden">
          <TravelBlog key={place.id} props={place} />
        </div>
      ))}
    </main>
  );
}

export default App;
