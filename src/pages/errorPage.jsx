import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let title = 'Error';
  if (error.status === 404) {
    title = 'Page Not Found';
  } else if (error.status === 500) {
    title = 'Server Error';
  }

  return (
    <div id="error-page">
      <h1>{Error}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <code>{error.statusText || error.message || 'An unknown error occurred'}</code>
      </p>
    </div>
  );
}