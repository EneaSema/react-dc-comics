export default function ComicCard({ comic }) {
  return (
    <div className="col-1-6">
      <div className="comic-card">
        <figure>
          <img className="img-dc-comic" src={comic.thumb} alt={comic.series} />
        </figure>
        <h4 className="title-dc-comic">{comic.series}</h4>
      </div>
    </div>
  );
}
