export const ScrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  // => 스크롤 위치를 강제로 변경할 수 있음

  return null;
};
