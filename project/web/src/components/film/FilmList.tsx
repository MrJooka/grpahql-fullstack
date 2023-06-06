import { useFilmsQuery } from '../../generated/graphql';

export default function FilmList() {
  const { data, loading, error } = useFilmsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
