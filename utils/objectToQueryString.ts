export function objectToQueryString(params: { [key: string]: string | number | undefined }): string {
  const queryParams: string[] = [];
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });
  return queryParams.length ? `?${queryParams.join('&')}` : '';
}
