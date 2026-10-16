/**
 * Helper to resolve public assets correctly across different hosting environments
 * (e.g., Cloudflare Pages at root '/' vs GitHub Pages at subpath '/Ryan-Portfolio/').
 */
export const asset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) {
    base = `${base}/`;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // If the path already begins with the base subpath, don't prepend again
  const basePrefix = base.replace(/^\/|\/$/g, '');
  if (basePrefix && cleanPath.startsWith(`${basePrefix}/`)) {
    return `/${cleanPath}`;
  }
  return `${base}${cleanPath}`;
};
