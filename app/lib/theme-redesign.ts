const TRUE_VALUES = new Set(['1', 'true', 'yes', 'on'])
const FALSE_VALUES = new Set(['0', 'false', 'no', 'off'])

export function parseBooleanFlag(value: string | undefined, fallback = true): boolean {
  if (value == null || value.trim() === '') {
    return fallback
  }

  const normalized = value.trim().toLowerCase()
  if (TRUE_VALUES.has(normalized)) return true
  if (FALSE_VALUES.has(normalized)) return false
  return fallback
}

export function isThemeRedesignEnabledEnv(value: string | undefined): boolean {
  return parseBooleanFlag(value, true)
}
