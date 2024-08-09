/**
 * src/js/index.js
 */

import { $ } from './utils/dom.js'; // dom 조작
import store from './store/index.js'; // 상태값

function App() {
  // 상태는 변하는 데이터
  // 이 앱에서 변하는 것: 메뉴명
  // 개수는 메뉴명 리스트의 배열의 길이만 구해도 됨
  this.menu = {
    // 카테고리별 메뉴를 저장하기 위해 배열에서 객체로 변경
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  }; // App에 menu라는 상태값을 선언

  // 현재 카테고리를 저장하는 상태값
  this.currentCategory = `espresso`; // 에스프레소로 초기화

  this.init = () => {
    // 로컬스토리지에 저장된 값이 있다면 읽어오는 메서드
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    }

    render(); // 화면을 그려줌
    initEventListeners(); // 이벤트 리스너 호출
  };

  // 화면 렌더링 함수
  const render = () => {
    // map 메서드로 menu 객체를 순회하면서 새 배열에 담았다가 join 메서드로 하나의 문자열로 합침
    const template = this.menu[this.currentCategory] // 배열을 순회함
      .map(
        (
          menuItem,
          idx
          // html li 태그에 data-menu-id="" 라는 ID 추가해줌
          // 해당 요소에 동적으로 menuId라는 속성이 생성됨
          // menuId는 배열의 인덱스를 부여해서 고유한 값을 갖게 해줌
          // 예시
          // <div data-name = "hj" data-count = 1 , data-img='hj.pnj'></div>
          // dataset.count, dataset.name, dataset.img <- 이렇게 접근 가능
        ) => `<li data-menu-id="${idx}" class="menu-list-item d-flex items-center py-2">
    <span class="w-100 pl-2 menu-name ${
      menuItem.soldOut ? `sold-out` : `` // 품절이면 sold-out 클래스 추가
    }">${menuItem.name}</span>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
    >
      품절
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
    >
      수정
    </button>
    <button
      type="button"
      class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
    >
      삭제
    </button>
  </li>`
      )
      .join(``); // 문자열을 하나로 합침

    // 하나의 문자열이기 때문에 innerHTML로 추가해줘도 됨
    $(`#menu-list`).innerHTML = template;

    updateMenuCount();
  };

  const addMenuName = () => {
    if ($(`#menu-name`).value === ``) {
      alert(`메뉴를 입력해주세요`);
      return;
    }
    const espressMenuName = $(`#menu-name`).value;

    // push 메서드로 menu 객체에 객체를 추가해줌
    this.menu[this.currentCategory].push({ name: espressMenuName }); // menu 상태값에 espressMenuName을 추가함
    store.setLocalStorage(this.menu); // 상태값이 변경됐기 때문에 localStorage에 저장함
    render(); // 렌더링
    $(`#menu-name`).value = ``;
  };

  const updateMenuName = (e) => {
    // li 태그를 찾아서 dataset으로 menuID(배열의 인덱스)를 가져옴
    const menuId = e.target.closest(`li`).dataset.menuId;
    const $menuName = e.target.closest(`li`).querySelector(`.menu-name`);
    const menuName = $menuName.innerText;
    const updatedMenuName = prompt(`메뉴명을 수정하세요`, menuName);
    this.menu[this.currentCategory][menuId].name = updatedMenuName; // 배열을 수정해줌
    store.setLocalStorage(this.menu); // 로컬스토리지에 저장
    render();
  };

  const removeMenuName = (e) => {
    if (confirm(`정말 삭제하시겠어요?`)) {
      // li 태그를 찾아서 dataset으로 menuID(배열의 인덱스)를 가져옴
      const menuId = e.target.closest(`li`).dataset.menuId;
      this.menu[this.currentCategory].splice(menuId, 1); // splice: 배열의 특정 원소를 삭제함. 두번째 인자는 해당 원소부터 몇 개를 지울지 지정함
      store.setLocalStorage(this.menu); // 로컬스토리지에 저장
      render();
    }
  };

  const updateMenuCount = () => {
    const menuCount = this.menu[this.currentCategory].length;
    $(`.menu-count`).innerText = `총 ${menuCount}개`;
  };

  // 품절 버튼 클릭시 상태값 업데이트
  const soldOutMenu = (e) => {
    const menuId = e.target.closest(`li`).dataset.menuId;
    this.menu[this.currentCategory][menuId].soldOut =
      !this.menu[this.currentCategory][menuId].soldOut;
    store.setLocalStorage(this.menu);
    render();
  };

  // 이벤트 리스너 관리 함수
  const initEventListeners = () => {
    $(`#menu-list`).addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`menu-edit-button`)) {
        updateMenuName(e);
        return;
      }

      if (e.target.classList.contains(`menu-remove-button`)) {
        removeMenuName(e);
        return;
      }

      // 품절 버튼 클릭시
      if (e.target.classList.contains(`menu-sold-out-button`)) {
        soldOutMenu(e);
        return;
      }
    });

    $(`#menu-form`).addEventListener(`submit`, (e) => {
      e.preventDefault();
    });

    $(`#menu-submit-button`).addEventListener(`click`, addMenuName);

    $(`#menu-name`).addEventListener(`keypress`, (e) => {
      if (e.key !== `Enter`) {
        return;
      }
      addMenuName();
    });

    // 카테고리 버튼에서만 이벤트가 발생할 수 있도록 상위 태그에 이벤트 위임
    $(`nav`).addEventListener(`click`, (e) => {
      // nav 태그 전체에 클릭 이벤트를 등록하면 버튼이 아닌 공간을 클릭해도 이벤트가 발생하기 때문에 예외처리
      const isCategoryButton =
        e.target.classList.contains(`cafe-category-name`);
      if (isCategoryButton) {
        const categoryName = e.target.dataset.categoryName; // 클릭한 버튼의 카테고리 명을 가져옴
        this.currentCategory = categoryName; // 상태값을 클릭한 카테고리 명으로 업데이트
        $(`#category-title`).innerText = `${e.target.innerText} 메뉴 관리`; // 서브 타이틀을 업데이트함
        render(); // 카테고리별로 렌더링함
      }
    });
  };
}

// this 키워드를 사용해서 생성자 함수가 됐기 때문에 new 키워드로 생성해줘야 프로퍼티에 접근할 수 있음
// 그렇지 않으면 일반적인 함수처럼 동작해서 새로운 객체를 반환하지 않음
// App();
const app = new App(); // 이렇게 해줘야 함
app.init(); // 페이지에 접근하면 메서드 호출
