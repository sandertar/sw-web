'use client';

import { SyntheticEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Button } from '@/components/Button';

interface Props {
  search?: string;
  onChange: (search: string) => void;
}

export function SearchBar({ search = '', onChange }: Props): JSX.Element {
  const [searchText, setSearchText] = useState(search);
  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    onChange(searchText);
  };
  return (
    <form className="flex space-x-2" onSubmit={onSubmit}>
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg bg-transparent border focus:outline-none"
        placeholder="Search for a character"
        value={searchText}
        onChange={(e): void => {
          setSearchText(e.target.value);
        }}
      />
      <Button type="submit">
        <BsSearch />
      </Button>
    </form>
  );
}
