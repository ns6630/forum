export default function getFormatedDate(date: Date) {
  function addExtraZeroForNumber(value: number) {
    const result = String(value);
    return result.length === 1 ? "0" + result : result;
  }

  const year = date.getFullYear();
  const month = addExtraZeroForNumber(date.getMonth() + 1);
  const day = addExtraZeroForNumber(date.getDate());
  const hours = addExtraZeroForNumber(date.getHours());
  const minutes = addExtraZeroForNumber(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}