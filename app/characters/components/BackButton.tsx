'use client';

import { useRouter } from 'next/navigation';
import { RiArrowLeftLine } from 'react-icons/ri';

import { Typography } from '@/components';

interface Props {
  className?: string;
}

export function BackButton({ className = '' }: Props): JSX.Element {
  const router = useRouter();

  return (
    <button type="button" className={`${className}`} onClick={(): void => router.back()}>
      <Typography>
        <RiArrowLeftLine className="w-5 h-5 inline-block" />
        Back
      </Typography>
    </button>
  );
}
