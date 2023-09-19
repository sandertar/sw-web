'use client';

enum TypographyVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  BODY1 = 'body1',
  BODYSM = 'bodySm',
}

const CLASS_MAP: Record<TypographyVariant, string> = {
  [TypographyVariant.H1]: 'text-xl2',
  [TypographyVariant.H2]: 'text-xl',
  [TypographyVariant.H3]: 'text-lg',
  [TypographyVariant.H4]: 'text-md',
  [TypographyVariant.H5]: 'text-md',
  [TypographyVariant.H6]: 'text-md',
  [TypographyVariant.BODY1]: 'text-md',
  [TypographyVariant.BODYSM]: 'text-sm',
};

const VARIANT_MAP: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  [TypographyVariant.H1]: 'h1',
  [TypographyVariant.H2]: 'h2',
  [TypographyVariant.H3]: 'h2',
  [TypographyVariant.H4]: 'h4',
  [TypographyVariant.H5]: 'h5',
  [TypographyVariant.H6]: 'h6',
  [TypographyVariant.BODY1]: 'span',
  [TypographyVariant.BODYSM]: 'span',
};

interface Props {
  variant?: `${TypographyVariant}`;
  block?: boolean;
  className?: string;
  highlighted?: boolean;
}

export function Typography({
  className = '',
  variant = 'body1',
  block = false,
  highlighted,
  children,
}: Props & React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
  const typographyLayoutClasses = '';
  const typographyHighlightedClasses = 'text-blue-500';
  const finalTypographyClasses = `${className} ${typographyLayoutClasses} ${CLASS_MAP[variant]} ${
    highlighted ? typographyHighlightedClasses : ''
  } ${block ? 'block' : ''}`;
  const Tag = VARIANT_MAP[variant];
  return <Tag className={finalTypographyClasses}>{children}</Tag>;
}

Typography.variant = TypographyVariant;
