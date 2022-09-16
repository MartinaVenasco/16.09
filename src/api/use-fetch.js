import { useState, useEffect } from 'react';

export const useFetch = (url, mapFn = null) => {
  const [loading, setLoading] = useState(false); // true|false
  const [data, setData] = useState(null); // null|Response
  const [error, setError] = useState(null); // null|Error|false

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (typeof mapFn === 'function') {
          setData(mapFn(json));
        } else {
          setData(json);
        }
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, mapFn]);

  return { loading, data, error };
};