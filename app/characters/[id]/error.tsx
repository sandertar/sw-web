'use client';

export default function Error({ statusCode }: { statusCode: number }): JSX.Element {
  return (
    <div className="error">
      <h1>{statusCode}</h1>
      <p>Something went wrong</p>
    </div>
  );
}
