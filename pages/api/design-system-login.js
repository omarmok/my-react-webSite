/**
 * Design System Login — server-side password validation.
 *
 * PASSWORD SOURCE
 * ──────────────
 * Vercel Environment Variable: DESIGN_SYSTEM_PASSWORD
 *
 * To change the password:
 *   Vercel → Project → Settings → Environment Variables → DESIGN_SYSTEM_PASSWORD
 *   Then redeploy (new env vars are not picked up until next deployment).
 *
 * For local development:
 *   Set DESIGN_SYSTEM_PASSWORD in .env.local — never commit that file.
 *
 * Full guide: docs/design-system-access.md
 */
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body ?? {};

  // PASSWORD SOURCE: Vercel → Project → Settings → Environment Variables
  // Variable name:   DESIGN_SYSTEM_PASSWORD
  // Never use NEXT_PUBLIC_ prefix — that would expose it to the browser bundle.
  const correctPassword = process.env.DESIGN_SYSTEM_PASSWORD;

  // Dev-only diagnostics — logs presence and length only, never the value itself.
  if (process.env.NODE_ENV !== "production") {
    console.log("[design-system-login] env var present:", Boolean(correctPassword));
    console.log("[design-system-login] env password length:", correctPassword?.length ?? 0);
    console.log(
      "[design-system-login] submitted password length:",
      typeof password === "string" ? password.length : "not a string"
    );
  }

  if (!correctPassword) {
    // DESIGN_SYSTEM_PASSWORD is not set — add it in Vercel Environment Variables
    // and redeploy. See docs/design-system-access.md for steps.
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  // Trim both sides — prevents invisible whitespace from Vercel UI copy-paste
  // causing a permanent 401 even with the correct password.
  const submitted = typeof password === "string" ? password.trim() : "";
  const expected = correctPassword.trim();

  if (!submitted || submitted !== expected) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // Set a short-lived httpOnly cookie — never accessible from JavaScript.
  // 600 seconds = 10 minutes. Adjust Max-Age here if a longer session is needed.
  const isProduction = process.env.NODE_ENV === "production";

  const cookieParts = [
    "design_system_access=true",
    "Max-Age=600",
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
  ];
  if (isProduction) {
    cookieParts.push("Secure");
  }

  res.setHeader("Set-Cookie", cookieParts.join("; "));
  return res.status(200).json({ success: true });
}
