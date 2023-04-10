const DOTS = "...";

export default function usePagination({
  currentIndex,
  totalItems,
  itemsPerPage,
  siblingCount = 2,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const isLeftDots = currentIndex - siblingCount * 2 >= 1;
  const isRightDots = totalPages - currentIndex >= siblingCount * 2;

  const range = [];

  if (!isLeftDots && isRightDots) {
    for (let i = 1; i <= siblingCount * 2; i++) {
      range.push(i);
    }
    range.push(DOTS, totalPages);
    return range;
  }
  if (isLeftDots && !isRightDots) {
    range.push(1, DOTS);
    for (let i = siblingCount * 2 - 1; i >= 0; i--) {
      range.push(totalPages - i);
    }
    return range;
  }
  if (isLeftDots && isRightDots) {
    range.push(1, DOTS);
    for (
      let i = currentIndex - siblingCount;
      i < currentIndex + siblingCount;
      i++
    ) {
      range.push(i);
    }
    range.push(DOTS, totalPages);
    return range;
  }

  for (let i = 1; i <= totalPages; i++) {
    range.push(i);
  }
  return range;
}
