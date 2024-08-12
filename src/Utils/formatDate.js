import moment from 'moment'

export const formatDateTimeFull = date => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss')
}
