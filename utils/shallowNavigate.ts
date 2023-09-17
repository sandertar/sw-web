import { objectToQueryString } from '@/utils/objectToQueryString';

/**
 * This function is used to update the URL without reloading the page.
 * This is workaround for the fact that Next.js 13 does not support changing the URL without reloading the page.
 */
export function shallowNavigate(pathname: string, params: { [key: string]: string | number | undefined }): void {
  if (window) {
    window.history.pushState({}, '', `${pathname}${objectToQueryString(params)}`);
  }
}
