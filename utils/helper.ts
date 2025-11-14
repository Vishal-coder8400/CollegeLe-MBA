export const convertDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-UK', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
