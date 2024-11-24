import { useEffect, useState } from "react";

const MovieCast = () => {
  const { userId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastByMovieId(movieId);
      setCasts(data);
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>{cast.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
