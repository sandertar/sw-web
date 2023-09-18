export function formatDate(date: string): string {
  const dt = new Date(date);
  const padL = (nr: number): string => `${nr}`.padStart(2, '0');
  return `${padL(dt.getDate())}/${padL(dt.getMonth() + 1)}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(
    dt.getMinutes(),
  )}`;
}
