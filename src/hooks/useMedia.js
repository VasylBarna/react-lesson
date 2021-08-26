import { useEffect, useState } from 'react';

/*
    Usage

    const mobile = useMedia('(max-width:500px)');
*/

export function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    let media = window.matchMedia(query); //< 500px
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    window.media.addListener(listener);

    return () => window.media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
