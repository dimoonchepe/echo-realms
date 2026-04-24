/**
 * Rewrites the size token in an iTunes/Apple Music CDN URL.
 *
 * iTunes URLs look like:
 *   https://is1-ssl.mzstatic.com/image/thumb/Music126/.../500x500bb.webp
 *
 * We simply replace the `{w}x{h}{qualifier}.{ext}` segment at the end of the
 * path with the requested size, keeping the extension intact.
 */
export function itunesImage(url: string | undefined, size: number): string | undefined {
  if (!url) return undefined;
  // Match the terminal size token: e.g. "500x500bb.webp" or "100x100bb.jpg"
  return url.replace(/\d+x\d+bb(\.\w+)$/, `${size}x${size}bb$1`);
}
