export const AVATARS = [
  { id: 'fox', emoji: '🦊', bg: 'bg-primary-container/40' },
  { id: 'owl', emoji: '🦉', bg: 'bg-secondary-container/60' },
  { id: 'turtle', emoji: '🐢', bg: 'bg-tertiary-container/50' },
  { id: 'lion', emoji: '🦁', bg: 'bg-primary/15' },
  { id: 'dolphin', emoji: '🐬', bg: 'bg-secondary/15' },
]

export function getAvatarById(id) {
  return AVATARS.find((a) => a.id === id) || null
}

export function getStoredAvatarId() {
  return localStorage.getItem('pp-avatar')
}

export function setStoredAvatarId(id) {
  localStorage.setItem('pp-avatar', id)
  window.dispatchEvent(new Event('pp-avatar-changed'))
}
