const PERIOD_MS = 5 * 60 * 1000

const floorToPeriod = (date = new Date()) =>
  new Date(Math.floor(date.getTime() / PERIOD_MS) * PERIOD_MS)

export const getToday = () => floorToPeriod()

// Only used for archived-game navigation; keeping the name avoids wider changes.
export const getYesterday = () => new Date(getToday().getTime() - PERIOD_MS)