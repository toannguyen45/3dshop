import moment from 'moment'

export const formatDateTimeFull = date => {
  return moment(date).format('DD/MM/YYYY HH:mm:ss')
}

export const formatPrice = price => {
  return parseInt(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
