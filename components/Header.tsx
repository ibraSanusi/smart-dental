function Header() {
  return (
    <header className="w-screen">
      <div className="max-w-360 w-full mx-auto flex flex-row justify-between p-8">
        <span>imagen</span>
        <div>
          <nav className="flex flex-row gap-8 items-center">
            <button>Uno</button>
            <button>Dos</button>
            <button>Tres</button>

            <button className="p-4 rounded-lg bg-blue-600 text-white font-bold">
              Explicame tu caso
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
