export default function Footer() {
  return (
    <footer>
      <div className="container">
        <button className="btn">
          <h3 id="text-btn">SIGN-UP NOW!</h3>
        </button>

        <nav>
          <ul>
            <li>
              <a id="text-follow-us" href="#">
                FOLLOW US
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/footer-facebook.png" alt="icona-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/footer-twitter.png" alt="icona-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/footer-youtube.png" alt="icona-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/footer-pinterest.png" alt="icona-pintarest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../img/footer-periscope.png" alt="icona-periscope" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
