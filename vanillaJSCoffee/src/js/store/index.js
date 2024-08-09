// 상태값 관리
// localStorage에 저장하고 불러오기 위한 객체 생성
const store = {
  // localStorage에 set하는 메서드
  setLocalStorage(menu) {
    // 메뉴를 전달해 줄 때는 객체 형태가 아닌 문자열 형태로 입력해줘야 함
    // JSON 객체를 문자열로 저장함
    localStorage.setItem(`menu`, JSON.stringify(menu));
  },
  // localStorage에 get하는 메서드
  getLocalStorage() {
    // 문자열 형태로 저장된 값을 JSON 형태로 파싱해서 리턴
    // 문자열은 순회하지 못 함
    return JSON.parse(localStorage.getItem(`menu`));
  },
};

export default store;
