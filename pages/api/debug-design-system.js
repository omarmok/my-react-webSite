export default function handler(req, res) {
  return res.status(200).json({
    hasPassword: Boolean(process.env.DESIGN_SYSTEM_PASSWORD),
    passwordLength: process.env.DESIGN_SYSTEM_PASSWORD?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });
}
