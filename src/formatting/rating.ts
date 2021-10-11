export default function getPresentationRating(value: number) {
  // Округление до одного знака дробной части в меньшую сторону.
  let result = Math.round((value / 1000) * 10) / 10;
  if (result >= 1 || result <= -1) {
    // Если result вида x.0, вернем "xk", вместо "x.0k".
    if ((result * 10) % 10 === 0) {
      return Math.trunc(result) + "k";
    }
    return result + "k";
  }
  return String(value);
}