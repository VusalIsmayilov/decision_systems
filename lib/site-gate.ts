/**
 * Hostname-based “under construction” gating.
 *
 * Reversible:
 * - Set `SITE_GATE_UNDER_CONSTRUCTION=false` in the environment to disable all gating, or
 * - Set `UNDER_CONSTRUCTION_HOSTS` to an empty array below.
 *
 * Only hosts listed here show the construction page; all others (e.g. *.vercel.app, localhost)
 * receive the full app with no change.
 */

export const UNDER_CONSTRUCTION_HOSTS: readonly string[] = [
  "partners.dataofis.az",
  "www.partners.dataofis.az",
];

const disabledByEnv =
  process.env.SITE_GATE_UNDER_CONSTRUCTION === "false" ||
  process.env.SITE_GATE_UNDER_CONSTRUCTION === "0";

const hostSet = new Set(
  UNDER_CONSTRUCTION_HOSTS.map((h) => h.toLowerCase()),
);

/** Internal path served when a gated host is matched (must stay in sync with middleware). */
export const UNDER_CONSTRUCTION_PATH = "/under-construction";

export function isGatedHostname(hostname: string | null): boolean {
  if (disabledByEnv || UNDER_CONSTRUCTION_HOSTS.length === 0) return false;
  if (!hostname) return false;
  const h = hostname.split(":")[0].toLowerCase();
  return hostSet.has(h);
}
