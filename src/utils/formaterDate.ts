export default function formaterDate(date: string): string {
  const creationDate: Date = new Date(date)
  const currentDate: Date = new Date()

  const timeDiffInMilliseconds: number = Math.abs(
    currentDate.getTime() - creationDate.getTime(),
  )
  const timeDiffInDays: number = Math.floor(
    timeDiffInMilliseconds / (1000 * 60 * 60 * 24),
  )

  if (timeDiffInDays === 0) {
    return 'Hoje'
  } else if (timeDiffInDays === 1) {
    return 'Há 1 dia'
  } else {
    return `Há ${timeDiffInDays} dias`
  }
}
