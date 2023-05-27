export default function formaterDate(date: string): string {
  const creationDate: Date = new Date(date)
  const currentDate: Date = new Date()

  const creationDateCopy: Date = new Date(
    creationDate.getFullYear(),
    creationDate.getMonth(),
    creationDate.getDate(),
  )

  const currentDateCopy: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  )

  if (isSameDate(creationDateCopy, currentDateCopy)) {
    return 'Hoje'
  } else if (isPastDate(creationDateCopy, currentDateCopy)) {
    const timeDiffInMilliseconds: number =
      currentDateCopy.getTime() - creationDateCopy.getTime()
    const timeDiffInDays: number = Math.floor(
      timeDiffInMilliseconds / (1000 * 60 * 60 * 24),
    )
    if (timeDiffInDays === 1) {
      return 'Há 1 dia'
    } else {
      return `Há ${timeDiffInDays} dias`
    }
  } else {
    return 'Data inválida'
  }
}

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

function isPastDate(date: Date, currentDate: Date): boolean {
  return date < currentDate
}
