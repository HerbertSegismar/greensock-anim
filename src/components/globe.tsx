import Globe from "react-globe.gl";

function MyGlobe() {
  return (
    <div className="w-1/4 h-1/4">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={[
          {
            lat: 40.71,
            lng: -74.01,
            label: "New York",
            // Optional additional properties
            color: "red",
            altitude: 0.1,
            radius: 0.1,
          },
        ]}
      />
    </div>
  );
}

export default MyGlobe