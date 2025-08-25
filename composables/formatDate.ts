import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/th'
import 'dayjs/locale/en'

dayjs.extend(localizedFormat)

export const useFormatDate = (date: string) => {
  const localizedDayjs = dayjs(date).locale('en')
  return localizedDayjs.format('D MMMM YYYY - HH:mm')
}
