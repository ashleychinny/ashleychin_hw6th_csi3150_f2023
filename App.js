import React from "react";
import Hero from "./src/components/Hero/Hero";
import TravelBlog from "./src/components/TravelBlog/TravelBlog";
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
