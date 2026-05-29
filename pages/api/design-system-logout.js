export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader(
    "Set-Cookie",
    "design_system_access=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict"
  );
  return res.status(200).json({ success: true });
}
