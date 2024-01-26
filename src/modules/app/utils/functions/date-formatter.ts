export function checkIsValidDate(date: Date): boolean {
  return Object.prototype.toString.call(date) === '[object Date]';
}
export const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
