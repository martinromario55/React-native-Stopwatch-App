// Numbers less than 10 will have a 0 before them
const padToTwo = number => (number <= 9 ? `0${number}` : number)

export const displayTime = centiseconds => {
  let minutes = 0
  let seconds = 0

  if (centiseconds < 0) return (centiseconds = 0)
  if (centiseconds < 100) return `00:00:${padToTwo(centiseconds)}`

  //   rendering centiseconds less than 100
  let remainingCentiseconds = centiseconds % 100
  seconds = (centiseconds - remainingCentiseconds) / 100

  if (seconds < 60)
    return `00:${padToTwo(seconds)}:${padToTwo(remainingCentiseconds)}`

  //   rendering seconds less than 60
  let remainingSeconds = seconds % 60
  minutes = (seconds - remainingSeconds) / 60
  return `${padToTwo(minutes)}:${padToTwo(remainingSeconds)}:${padToTwo(
    remainingCentiseconds
  )}`
}
