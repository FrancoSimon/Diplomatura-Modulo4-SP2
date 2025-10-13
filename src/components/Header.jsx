import Button from "./Button";

export const Header = ({ onOpenModal }) => (
  <header className="flex fixed top-0 left-0 w-full bg-black  transition-all duration-300 justify-between items-center sm:px-12 sm:py-6 px-4 py-3 z-10">
    <h1 className="text-white text-2xl font-bold">Destinos Naturales y Culturales</h1>
    <Button
      onClick={onOpenModal} variant=""
    >
      Destinos favoritos
    </Button>
  </header>
);

export default Header;
