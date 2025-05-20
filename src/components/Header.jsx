export default function Header() {
  return (
    <header>
      <div className="container">
        <figure>
          <img src="assets/img/dc-logo.png" alt="dc-logo" />
        </figure>
        <nav>
          <ul>
            <li>CHARACTERS</li>
            <li id="text-selected">COMICS</li>
            <li>MOVIES</li>
            <li>TV</li>
            <li>GAMES</li>
            <li>COLLECTIBLES</li>
            <li>VIDEOS</li>
            <li>FANS</li>
            <li>NEWS</li>
            <li>SHOP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
