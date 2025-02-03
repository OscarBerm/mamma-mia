const Header = () => {
  return (
    <div className="header bg-cover bg-center w-full h-[60vh] flex flex-col justify-center items-center p-40 m-0 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <h2 className="font-bold text-5xl md:text-7xl text-center my-4 z-10">¡Pizzería Mamma Mia!</h2>
      <p className="text-xl md:text-2xl text-center text-gray-300 z-10">
      ¡Tenemos las mejores pizzas que podrás encontrar!
      </p>
    </div>
  );
};
export default Header;
