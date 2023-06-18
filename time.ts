export function time(fullGameTime) {
    console.log(fullGameTime)
    let min = String(Math.round(fullGameTime / 60))
    console.log(min)
    let sec = String(Math.round(fullGameTime % 60))
    console.log(sec)
    return `${min.length < 2 ? '0' + min : min}.${
        sec.length < 2 ? '0' + sec : sec
    }`
}
