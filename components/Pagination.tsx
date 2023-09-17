import { Button } from './Button';

interface Props {
  page: number;
  hasNextPage: boolean;
  onChange: (page: number) => void;
  isDisabled?: boolean;
}

export function Pagination({ page, onChange, hasNextPage, isDisabled }: Props): JSX.Element {
  return (
    <div className="flex justify-center items-center py-5">
      <Button
        disabled={isDisabled || page === 1}
        onClick={(): void => {
          onChange(page - 1);
        }}
        type="button"
        className="mx-1"
      >
        &#8249;
      </Button>
      <div className="mx-2">{page}</div>
      <Button
        disabled={isDisabled || !hasNextPage}
        onClick={(): void => {
          onChange(page + 1);
        }}
        type="button"
        className="mx-1"
      >
        &#8250;
      </Button>
    </div>
  );
}
