export function checkIsValidDate(date: Date): boolean {
  return !(date.toString() === 'Invalid Date');
}
export const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
