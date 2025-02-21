export function convertDate(date : Date) {
    let date_short = new Date(date)
    let now = new Date(Date.now())
    let diff = now.getTime() - date_short.getTime()

    let convertedDate = date_short.toLocaleDateString("en-UK")
    if (diff < (1000*60*60*24)) convertedDate = `${Math.floor(diff/1000/60/60)} h ago`
    if (diff < (1000*60*60)) convertedDate = `${Math.floor(diff/1000/60)} min ago`

    return convertedDate
}