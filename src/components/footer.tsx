
const Footer = () => {
  return (
    <h1 className="text-sm md:text-lg flex text-center items-center justify-center text-slate-300">
      &nbsp;<span className="text-amber-300">&copy;</span>&nbsp; Copyright{" "}
      {new Date().getFullYear()} Herb Segismar
    </h1>
  );
}

export default Footer