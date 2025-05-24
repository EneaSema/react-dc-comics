import Alert from "../ui/Alert";

import ComicCard from "./ComicCard";

export default function Main({ comics }) {
  const hasmassage = false;

  return (
    <main>
      <div className="container-main">
        {hasmassage && (
          <Alert type="info">{/* <h1>Messaggio di Errore</h1> */}</Alert>
        )}

        <section className="section-insert-img"></section>

        <section className="section-insert-dc-list">
          <div className="container">
            <div className="current-series">
              <div id="title-current-series">
                <h3> CURRENT SERIES</h3>
              </div>
              <div className="row">
                {/* 1 card */}
                {comics.map((comic, index) => (
                  <ComicCard comic={comic} key={index} />
                ))}

                {/* fine card comic */}
              </div>
            </div>
          </div>
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
              <ul id="info-shop">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </nav>
          </div>

          <div id="dc-link-info">
            <h4 className="info-text-important">DC</h4>
            <nav>
              <ul id="info-dc-quiet-politics">
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
          </div>

          <div id="dc-sites">
            <h4 className="info-text-important">SITES</h4>
            <nav>
              <ul id="info-dc-sites">
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}
