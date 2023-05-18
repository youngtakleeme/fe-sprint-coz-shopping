// 전달인자로 받은 number 개수만큼의 요소만 포함하는 배열을 반화하는 함수
export const defaultProductCount = 4;
export function extractNumberOfElementFromArray(
  dataArr,
  number = defaultProductCount
) {
  const extractedArray = [];
  dataArr.some((product, idx) => {
    if (idx === number) {
      return true;
    }
    extractedArray.push(product);
  });
  return extractedArray;
}
