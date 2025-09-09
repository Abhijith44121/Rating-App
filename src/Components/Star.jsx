const Star = ({ star, rating, hover, rateClick, mouseHover, mouseLeave }) => {
  return (
    <span
      onClick={() => rateClick(star)}
      onMouseEnter={() => mouseHover(star)}
      onMouseLeave={mouseLeave}
      className="star"
      style={{ color: star <= (hover || rating) ? 'gold' : '#ccc' }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
