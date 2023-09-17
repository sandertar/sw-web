'use client';

enum SkeletonVariant {
  TEXT = 'text',
  RECTANGULAR = 'rectangular',
  CIRCULAR = 'circular',
}

const VARIANT_MAPS: Record<SkeletonVariant, string> = {
  [SkeletonVariant.TEXT]: 'h-4 rounded-lg',
  [SkeletonVariant.RECTANGULAR]: 'w-full rounded-lg',
  [SkeletonVariant.CIRCULAR]: 'rounded-full',
};

interface Props {
  variant: `${SkeletonVariant}`;
  className?: string;
}

export function Skeleton({ className, variant }: Props): JSX.Element {
  const skeletonLayoutClasses = 'animate-pulse bg-gray-200/50';

  const finalSkeletonClasses = `${className} ${skeletonLayoutClasses} ${VARIANT_MAPS[variant]}`;

  return <div className={finalSkeletonClasses} />;
}

Skeleton.variant = SkeletonVariant;
