import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(121);
  // const inputRef = useRef(null);
  const exampleRef = useRef(0);

  useEffect(() => {
    // inputRef.current.focus();
    const intervalId = setInterval(() => {
      exampleRef.current = exampleRef.current + 1;
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const handleClick = useCallback(() => alert(1), []);

  const calculatedValue = useMemo(() => {
    return value * 2 * 2 * 2 * 2;
  }, [value]);

  return (
    <div>
      <h1>Value: {calculatedValue}</h1>
      <div>
        {/* <input ref={inputRef} placeholder="Leave your feedback" /> */}
        <Button
          variant="contained"
          color="primary"
          // onClick={() => alert(exampleRef.current)}
          onClick={handleClick}
        >
          Show time spent on this page
        </Button>
      </div>
      <h1 onClick={() => setValue(value + 1)}>{value}</h1>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}>{review}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          setReviews(prevReviews => {
            return [...prevReviews, 'Все круто!!!'];
          })
        }
      >
        Update reviews
      </button>
    </div>
  );
};
