import { createHmac, timingSafeEqual } from "node:crypto";

const sessionLifetimeSeconds = 60 * 60 * 8;

function getSecret() {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) throw new Error("Admin credentials are not configured.");
  return `${email}:${password}`;
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createAdminSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + sessionLifetimeSeconds;
  const value = String(expiresAt);
  return `${value}.${sign(value)}`;
}

export function isValidAdminSession(value: string | undefined) {
  if (!value) return false;
  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature || Number(expiresAt) < Math.floor(Date.now() / 1000)) return false;
  const expected = sign(expiresAt);
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export { sessionLifetimeSeconds };
