import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)

export const useRelativeDate = (date: string) => {
  dayjs.locale('en')
  return dayjs().to(dayjs(date))
}