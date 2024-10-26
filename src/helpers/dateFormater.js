import { formatDistanceToNow } from "date-fns"


export const dateFormater = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
  
}
