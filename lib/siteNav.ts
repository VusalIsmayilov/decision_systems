/**
 * Path without locale prefix (e.g. from stripLocalePrefix). Must start with / or be /.
 */
function resolveRouteNavId(strippedPath: string): string {
  const p = strippedPath;
  if (p.startsWith('/why-analytics-ai-fail')) return 'why-analytics-ai-fail';
  if (p.startsWith('/decision-diagnostic/intake')) return 'decision-diagnostic';
  if (p.startsWith('/decision-diagnostic')) return 'decision-diagnostic';
  if (p.startsWith('/decision-systems-in-practice')) return 'decision-systems-in-practice';
  if (p.startsWith('/decision-systems-design')) return 'decision-systems-design';
  if (p.startsWith('/decision-systems')) return 'decision-systems';
  if (p.startsWith('/how-decisions-are-structured')) return 'how-decisions-are-structured';
  if (p.startsWith('/insights')) return 'insights';
  if (p.startsWith('/about')) return 'about';
  if (p === '/') return 'home';
  return 'home';
}

/** Chapter id for NavigationOverlay — must exist in `NAV_MENU_CATEGORIES` (no Insights chapter). */
export function getNavOverlayChapterId(strippedPath: string): string {
  const id = resolveRouteNavId(strippedPath);
  return id === 'insights' ? 'home' : id;
}
