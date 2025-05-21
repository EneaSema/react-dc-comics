export default function Main() {
  return (
    <main>
      <div className="container-main">
        <section className="section-insert">
          <h1>--&gt; Content goes here &lt;--</h1>
        </section>
        <section className="section-merchandising">
          <nav>
            <ul>
              <li>
                <div className="card">
                  <img
                    className="img-icon-merchandise"
                    src="../img/buy-comics-digital-comics.png"
                    alt=""
                  />
                  <span className="text-icon-merchandise">DIGITAL COMICS</span>
                </div>
              </li>

              <li>
                <div className="card">
                  <img
                    className="img-icon-merchandise"
                    src="../img/buy-comics-merchandise.png"
                    alt=""
                  />
                  <span className="text-icon-merchandise">DIGITAL COMICS</span>
                </div>
              </li>

              <li>
                <div className="card">
                  <img
                    className="img-icon-merchandise"
                    src="../img/buy-comics-subscriptions.png"
                    alt=""
                  />
                  <span className="text-icon-merchandise">DIGITAL COMICS</span>
                </div>
              </li>

              <li>
                <div className="card">
                  <img
                    className="img-icon-merchandise"
                    src="../img/buy-comics-shop-locator.png"
                    alt=""
                  />
                  <span className="text-icon-merchandise">DIGITAL COMICS</span>
                </div>
              </li>

              <li>
                <div className="card">
                  <img
                    className="img-icon-merchandise"
                    src="../img/buy-dc-power-visa.svg"
                    alt=""
                  />
                  <span className="text-icon-merchandise">DIGITAL COMICS</span>
                </div>
              </li>
            </ul>
          </nav>
        </section>

        <section className="section-info">
          <div id="dc-comics-shop">
            <h4 className="info-text-important">DC COMICS</h4>
            <nav>
              <ul id="info-dc-comics">
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
            </nav>

            <h4 className="info-text-important">SHOP</h4>
            <nav>
              <ul id="info-dc-comics">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </nav>
          </div>

          <h4>DC</h4>
          <nav>
            <ul id="info-dc-comics">
              <li>Terms Of Use</li>
              <li>Privacy policy</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscription</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </nav>

          {/* <li>
                <h4>SHOP</h4>
                <nav>
                  <ul id="info-dc-comics">
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                  </ul>
                </nav>
              </li> */}
        </section>
      </div>
    </main>
  );
}
