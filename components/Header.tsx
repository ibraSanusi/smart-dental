function Header() {
  return (
    <header className="w-screen">
      <div className="max-w-360 w-full mx-auto flex flex-row justify-between p-8">
        <span className="text-3xl">🦷</span>
        <div>
          <nav className="flex flex-row gap-8 items-center *:font-bold *:text-black/60">
            <button>Ortodoncia</button>
            <button>Radiología Digital</button>
            <button>Anestesia General</button>
            <button>Medicina Estética</button>

            <button className="p-4 rounded-lg bg-blue-600 text-white font-bold">
              Pedir cita
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
