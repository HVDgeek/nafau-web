import { parseISO, format } from 'date-fns'
import locale from 'date-fns/locale/pt'

export function formateDate(date: string) {
  return format(parseISO(date), "dd 'de' MMMM', às ' HH:mm", { locale })
}
