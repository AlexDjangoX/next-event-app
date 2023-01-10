import Link from 'next/link';

const EventItem = (item) => {
  const { title, image, date, location, id } = item;

  const humanDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanDate}</time>
          </div>
          <div>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}></Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
