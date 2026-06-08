export const MAINTENANCE_CONFIG = {
  enabled: false,
  fullTimeMaintenance: false,
  title: 'Scheduled Maintenance',
  message: 'CyfroSec will undergo scheduled maintenance.',
  sourceTimeZone: 'Europe/Warsaw',
  startTime: '03:00',
  endTime: '05:00',
  warningMinutes: 30,
} as const;
