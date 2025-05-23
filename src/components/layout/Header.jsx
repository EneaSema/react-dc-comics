export default function Header() {
  return (
    <header>
      <div className="container">
        <figure>
          <img id="header-logo" src="../img/dc-logo.png" alt="dc-logo" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li id="text-selected">
              <a href="#">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
