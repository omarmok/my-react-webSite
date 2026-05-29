# Design System Access — Maintainer Guide

Protected route: `/design-system`
Protected content: `/PS-Design/DesignSystemDocumentation/`

---

## Where the password is stored

The password lives **only** in Vercel's Environment Variables. It is never in the source code, never in `.env.example`, and never committed to the repository.

To view or change it:

```
Vercel Dashboard
  → Your Project
  → Settings
  → Environment Variables
  → DESIGN_SYSTEM_PASSWORD
```

---

## How to change the password

1. Go to **Vercel → Project → Settings → Environment Variables**.
2. Find `DESIGN_SYSTEM_PASSWORD` and click **Edit**.
3. Enter the new password value.
4. Make sure the variable is enabled for **Production** (and Preview / Development if needed).
5. Click **Save**.
6. Redeploy — see the section below.

Do not put the password in:
- `.env.example`
- Source code
- Comments
- Git commits

Update `.env.local` on your local machine separately if you test locally.

---

## How to redeploy after changing the password

Vercel does not pick up new environment variable values until the next deployment.

**Option A — push a commit** (any change triggers a deploy automatically):

```bash
git commit --allow-empty -m "chore: trigger redeploy for env var update"
git push
```

**Option B — redeploy from the dashboard**:

```
Vercel Dashboard → Deployments → latest deployment → Redeploy
```

Wait for the deployment to complete (usually under 2 minutes) before testing.

---

## How the authentication works

```
User → /design-system (public page, shows password form)
     → POST /api/design-system-login  (server validates against DESIGN_SYSTEM_PASSWORD)
       → 401  wrong password → show error, nothing exposed
       → 200  correct password → sets httpOnly cookie (design_system_access=true, 10 min)
     → browser redirected to /PS-Design/DesignSystemDocumentation/index.html
     → proxy.js checks cookie on every request to that path
       → no valid cookie → redirect back to /design-system
       → valid cookie → allow access
```

The password is validated entirely server-side. It is never sent to the browser, never in the JS bundle, and never in localStorage or sessionStorage.

The session cookie expires after **10 minutes** (`Max-Age=600`). After that the user must re-enter the password.

---

## How to test access

**Test 1 — Unauthenticated direct access (should block)**

Open a private/incognito window and visit:
```
/PS-Design/DesignSystemDocumentation/index.html
```
Expected: redirected immediately to `/design-system`.

**Test 2 — Wrong password (should reject)**

On `/design-system`, submit any incorrect password.
Expected: error message shown, no redirect, no cookie set.

**Test 3 — Correct password (should grant access)**

Submit the correct password.
Expected: redirected to `/PS-Design/DesignSystemDocumentation/index.html`.

**Test 4 — Cookie inspection**

Open DevTools → Application → Cookies.
Expected: `design_system_access=true`, marked HttpOnly and Secure (production only).

**Test 5 — Session expiry**

Wait 10 minutes after logging in, then refresh the documentation page.
Expected: redirected back to `/design-system`.

**Test 6 — Bundle inspection**

Open DevTools → Sources → search for the password value.
Expected: not found anywhere in the JS bundle.

**Test 7 — Logout**

POST to `/api/design-system-logout` from any HTTP client or browser console:
```js
fetch('/api/design-system-logout', { method: 'POST' })
```
Expected: cookie is cleared, next visit to the docs page redirects to `/design-system`.

---

## Relevant files

| File | Purpose |
|---|---|
| `pages/api/design-system-login.js` | Server-side password validation, cookie issuance |
| `pages/api/design-system-logout.js` | Cookie clearing |
| `pages/design-system.js` | Public page with password form |
| `proxy.js` | Route protection — checks cookie before serving docs |
| `.env.example` | Documents the required variable name (no real value) |
| `.env.local` | Local development only — gitignored, never committed |

---

## Local development setup

Copy `.env.example` to `.env.local` and fill in a local test password:

```bash
cp .env.example .env.local
# then edit .env.local and set DESIGN_SYSTEM_PASSWORD=your-local-test-password
```

Restart the dev server after editing `.env.local`:

```bash
npm run dev
```
