import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Video() {
  const query = useQuery();
  return (
    <div>
      <iframe
        title={query.get('v')}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${query.get('v')}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      />
    </div>
  );
}

export default Video;
