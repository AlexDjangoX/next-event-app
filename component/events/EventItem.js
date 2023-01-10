import classes from './EventItem.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon.js';
import ArrowRightIcon from '../icons/arrow-right-icon.js';
import AddressIcon from '../icons/address-icon.js';

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
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button exploreLink={exploreLink}>
            <span> Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
