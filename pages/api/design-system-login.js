/**
 * Password is configured through:
 * DESIGN_SYSTEM_PASSWORD
 *
 * File:
 * .env.local
 *
 * Example:
 * DESIGN_SYSTEM_PASSWORD=MySecurePassword
 *
 * Restart the app after changing it.
 *
 * Admin note:
 * Password configuration location: .env.local
 * Variable name: DESIGN_SYSTEM_PASSWORD
 */
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body ?? {};
  // Server-side secret only. Never expose this value to the client or logs.
  const correctPassword = process.env.DESIGN_SYSTEM_PASSWORD;

  if (!correctPassword) {
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  if (typeof password !== "string" || password !== correctPassword) {
    return res.status(401).json({ error: "Incorrect password" });
  }

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
