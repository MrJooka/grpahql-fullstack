import { gql, useQuery } from '@apollo/client';

const FILM_QUERY = gql`
  query ExampleQuery {
    films {
      id
      title
      subtitle
    }
  }
`;

export default function FilmList() {
  const { data, loading, error } = useQuery(FILM_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
