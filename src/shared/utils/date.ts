import dayjs from 'dayjs';

export const parseStringToDate = (date: string) => {
  return dayjs(date).toDate();
};
