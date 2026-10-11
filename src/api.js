// The site is a design/demo: no backend is connected and nothing is stored.
// Every form goes through here, so adding a real API later (Firebase, Azure, etc.)
// only requires changing this function.
export function submitForm(type, data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, type, data }), 700);
  });
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^\+?[0-9\s()-]{10,}$/;
