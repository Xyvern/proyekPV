const Layout = () => {
  return (
    <div>
      <header className="z-50 backdrop-blur sticky top-0">
      <nav className="w-100 h-10vh flex justify-between lg-:py-5 px-20 py-10">
        <div className="flex items-center flex-1">
          <h3 className="text-2xl font-extrabold text-black px-5">Dapur AB</h3>
        </div>
        <div>
          <ul className="flex gap-8 mr-6 text-[18px]">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  );
}
 
export default Layout;