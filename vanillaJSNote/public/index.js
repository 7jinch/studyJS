/**
 * public/index.js
 */

const HOST = `localhost`;
const PORT = `3000`;

function statusCodeHandler(res) {
  if (res.status >= 400 && res.status < 500) {
    throw new Error(`4xx Error`);
  }
  if (res.status >= 500) {
    throw new Error(`5xx Error`);
  }
  return res.json();
}

// 백엔드와 연동하기
// built-in 함수인 fetch 활용: 비동기로 작성
const noteService = {
  // 모든 노트 가져오기
  getNotes: async function () {
    const data = await fetch(`http://${HOST}:${PORT}/api/notes`, {
      mode: `cors`, // cors를 사용해서 백엔드에 요청을 보냄
    }).then(statusCodeHandler);
    return data;
  },

  // 노트 생성하기
  // note = { title, body, pinned, backgroundColor }
  createNote: async function (note) {
    const data = await fetch(`http://${HOST}:${PORT}/api/notes`, {
      method: `POST`,
      mode: `cors`,
      cache: `no-cache`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then(statusCodeHandler);
    console.info(`노트(노트 ID: ${data.id})가 생성되었습니다`);
    return data;
  },
  // 기존 노트 수정하기
  // note = { title, body, pinned, backgroundColor }
  updateNote: async function (noteID, note) {
    const data = await fetch(`http://${HOST}:${PORT}/api/notes/${noteID}`, {
      method: `PUT`,
      mode: `cors`,
      cache: `no-cache`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then(statusCodeHandler);
    console.info(`노트(노트 ID: ${data.id})가 수정되었습니다`);
    return data;
  },
  // 기존 노트 삭제하기
  deleteNote: async function (noteID) {
    const data = await fetch(`http://${HOST}:${PORT}/api/notes/${noteID}`, {
      method: `DELETE`,
      mode: `cors`,
      cache: `no-cache`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(statusCodeHandler);
    console.info(`노트(노트 ID: ${data.id})가 삭제되었습니다`);
  },
};

// 컴포넌트 클래스 작성하기
class AddNoteBar {
  constructor({ onClick }) {
    this.elements = {
      container: document.getElementById(`newNoteBar`),
    };

    this.elements.container.addEventListener(`click`, onClick);
  }
}

class EmptyNotePlaceHolder {
  constructor() {
    this.elements = {
      container: document.getElementById(`emptyNotes`),
    };
  }

  show() {
    // 추가가 아닌 덮어씌우기임 -> 클래스 이름을 빈 값으로 변경
    this.elements.container.className = ``;
  }

  hide() {
    // 추가가 아닌 덮어씌우기임 -> 클래스 이름을 hide로 변경
    this.elements.container.className = `hide`;
  }
}

class Modal {
  constructor() {
    const that = this; // modal 클래스의 this
    this.elements = {
      modalLayout: document.getElementById('modalLayout'),
      modalWrapper: document.getElementById('modalWrapper'),
      modalContainer: document.querySelector(
        '#modalWrapper > div.modal-container'
      ),
      modalTitleInput: document.querySelector(
        '#modalWrapper > div > div.note-content > input.note-title-input'
      ),
      modalBodyInput: document.querySelector(
        '#modalWrapper > div > div.note-content > textarea.note-body-input'
      ),
      modalFooterPinButton: document.querySelector(
        '#modalWrapper > div > div.note-footer > div > button.pin'
      ),
      modalFooterPinIcon: document.querySelector(
        '#modalWrapper > div > div.note-footer > div > button.pin > span'
      ),
      modalFooterColorSelectButton: document.querySelector(
        '#modalWrapper > div > div.note-footer div.color-select'
      ),
      modalFooterColorSelectInput: document.querySelector(
        '#modalWrapper > div > div.note-footer div.color-select > input'
      ),
      modalFooterColorSelectIcon: document.querySelector(
        '#modalWrapper > div > div.note-footer div.color-select > span'
      ),
      modalFooterDeleteButton: document.querySelector(
        '#modalWrapper > div > div.note-footer > div > button.delete'
      ),
      modalFooterDeleteIcon: document.querySelector(
        '#modalWrapper > div > div.note-footer > div > button.delete > span'
      ),
      modalFooterCloseButton: document.querySelector(
        '#modalWrapper > div > div.note-footer > button.close'
      ),
    };

    this.elements.modalLayout.addEventListener(`click`, function () {
      // this.close()의 this는 modalLayout이기 때문에 close 함수를 불러오지 못 함
      that.close();
    });

    this.elements.modalTitleInput.addEventListener(`input`, function (e) {
      that.setTitle(e.target.value);
    });

    this.elements.modalBodyInput.addEventListener(`input`, function (e) {
      that.setBody(e.target.value);
    });

    this.elements.modalFooterPinButton.addEventListener(`click`, function () {
      that.setPin(!that.pinned);
    });

    this.elements.modalFooterColorSelectIcon.addEventListener(
      `click`,
      function (e) {
        e.stopPropagation(); // 상위 요소로 이벤트가 전파되는 것을 막음(노트가 눌리는 것을 방지)
        this.firstElementChild.click(); // 선택된 객체의 첫번째 자식 요소를 반환함
      }
    );

    this.elements.modalFooterColorSelectInput.addEventListener(
      `input`,
      function (e) {
        const color = e.target.value;
        that.setBackGroundColor(color);
      }
    );

    this.elements.modalFooterDeleteButton.addEventListener(
      `click`,
      // noteService가 비동기 함수라서 이 함수도 비동기
      function () {
        that.deleted = true;
        that.close();
      }
    );

    that.elements.modalFooterCloseButton.addEventListener(`click`, function () {
      that.close();
    });

    // 모달이 닫힐 때는 초기화
    this.setNoteId();
    this.setTitle();
    this.setBody();
    this.setPin();
    this.setBackGroundColor();

    this.closeHandler = () => {}; // 임의의 함수를 넣어서 에러가 발생하지 않게 함
  }

  open() {
    this.elements.modalWrapper.className = ``;
    this.elements.modalLayout.className = ``;
    this.elements.modalTitleInput.focus(); // 모달 제목에 마우스 포커스가 가있도록 함

    if (this.id === null) {
      this.elements.modalFooterDeleteButton.style.display = `none`;
    } else {
      this.elements.modalFooterDeleteButton.style.display = `block`;
    }
  }

  close() {
    // 모달이 닫힐 때 값을 반환을 해줘야 다른 컴포넌트에서도 사용 할 수 있음
    const obj = {
      id: this.id,
      title: this.title,
      body: this.body,
      pinned: this.pinned,
      backgroundColor: this.backgroundColor,
      deleted: this.deleted,
    };

    this.elements.modalWrapper.className = `hide`;
    this.elements.modalLayout.className = `hide`;

    // 모달이 닫힐 때는 초기화
    this.setNoteId();
    this.setTitle();
    this.setBody();
    this.setPin();
    this.setBackGroundColor();
    this.deleted = false;

    this.closeHandler(obj);
  }

  onclose(func) {
    this.closeHandler = func;
  }

  setNoteId(id) {
    this.id = id !== undefined ? id : null;
  }
  setTitle(title) {
    this.title = title !== undefined ? title : ``;
    this.elements.modalTitleInput.value = this.title;
  }
  setBody(body) {
    this.body = body !== undefined ? body : ``;
    this.elements.modalBodyInput.value = this.body;
  }
  setPin(pinned) {
    this.pinned = pinned !== undefined ? pinned : false;
    if (this.pinned) {
      this.elements.modalFooterPinIcon.className = `material-icons md-18 gray`;
    } else {
      this.elements.modalFooterPinIcon.className =
        'material-icons-outlined md-18 gray';
    }
  }
  setBackGroundColor(color) {
    this.backgroundColor = color !== undefined ? color : `#FFFFFF`;
    this.elements.modalContainer.style.backgroundColor = this.backgroundColor;
  }
}

// 역할
// 1. 노트 데이터를 담음
// 2. 노트 UI를 그림
class Note {
  constructor({
    id,
    title,
    body,
    createdAt,
    updatedAt,
    pinned,
    backgroundColor,
    onClickNote,
    onclickPin,
    onChangeBackgroundColor,
    onClickDelete,
  }) {
    this.elements = this._createNoteElements(
      id,
      title,
      body,
      pinned,
      backgroundColor
    );

    const that = this;

    this.id = id;
    this.setTitle(title);
    this.setBody(body);
    this.setCreatedAt(createdAt);
    this.setUpdatedAt(updatedAt);
    this.setPin(pinned);
    this.setBackGroundColor(backgroundColor);

    this.elements.noteContainer.addEventListener(`click`, function (e) {
      onClickNote(e, this);
    });

    this.elements.pinButton.addEventListener(`click`, function (e) {
      e.stopPropagation(); // 노트가 눌리는 것을 방지
      onclickPin(e, that);
    });

    this.elements.colorSelectButton.addEventListener(`change`, function (e) {
      e.stopPropagation();
      const color = e.target.value;
      onChangeBackgroundColor(e, color, that);
    });

    this.elements.deleteButton.addEventListener(`click`, function (e) {
      e.stopPropagation();
      onClickDelete(e, that);
    });
  }

  setTitle(title) {
    this.title = title !== undefined ? title : ``;
    this.elements.noteTitle.textContent = this.title;
  }
  setBody(body) {
    this.body = body !== undefined ? body : ``;
    const formattedBody = this.body.replace(/(?:\r\n|\r|\n)/g, `<br>`);
    this.elements.noteBody.innerHTML = formattedBody;
  }
  setCreatedAt(createdAt) {
    this.createdAt =
      createdAt !== undefined ? createdAt : Math.floor(Date.now() / 1000);
  }
  setUpdatedAt(updatedAt) {
    this.updatedAt =
      updatedAt !== undefined ? updatedAt : Math.floor(Date.now() / 1000);
  }
  setPin(pinned) {
    this.pinned = pinned !== undefined ? pinned : false;
    if (this.pinned) {
      this.elements.pinButtonIcon.className = `material-icons md-18 gray`;
    } else {
      this.elements.pinButtonIcon.className = `material-icons-outlined md-18 gray`;
    }
  }
  setBackGroundColor(backgroundColor) {
    this.backgroundColor =
      backgroundColor !== undefined ? backgroundColor : `#FFFFFF`;
    this.elements.noteContainer.style.backgroundColor = this.backgroundColor;
  }

  // 노트 컴포넌트 UI를 생성함
  // _: private 메서드라고 관행적으로 사용함
  _createNoteElements(id, title, body, pinned, backgroundColor) {
    const noteContainer = document.createElement(`div`);
    noteContainer.className = `note`;
    noteContainer.id = id;
    noteContainer.style.backgroundColor = backgroundColor;

    const noteTitle = document.createElement(`div`);
    noteTitle.className = `note-title`;
    if (title !== undefined && title !== null) {
      noteTitle.textContent = title;
    }

    const noteBody = document.createElement(`div`);
    noteBody.className = `note-body`;
    if (body !== undefined && body !== null) {
      // 정규표현식을 사용해서 특정 문자열을 <br>로 치환
      noteBody.textContent = body.replace(/(?:\r\n|\r|\n)/g, `<br>`);
    }

    const noteFooter = document.createElement(`div`);
    noteFooter.className = `note-footer flex-start`;

    const pinButton = document.createElement(`button`);
    pinButton.className = `pin`;

    const pinButtonIcon = document.createElement(`span`);
    pinButtonIcon.className = pinned
      ? `material-icons md-18 gray`
      : `material-icons-outlined md-18 gray`;
    pinButtonIcon.textContent = 'push_pin';

    const colorSelectButton = document.createElement(`div`);
    colorSelectButton.className = `color-select`;
    colorSelectButton.addEventListener(`click`, function (e) {
      e.stopPropagation(); // stopPropagation
      this.firstElementChild.click();
    });

    const colorSelecInput = document.createElement(`input`);
    colorSelecInput.className = `color-picker`;
    colorSelecInput.type = `color`;

    const colorSelectButtonIcon = document.createElement(`span`);
    colorSelectButtonIcon.className = `material-icons-outlined md-18 gray`;
    colorSelectButtonIcon.textContent = `palette`;

    const deleteButton = document.createElement(`button`);
    deleteButton.className = `delete`;

    const deleteButtonIcon = document.createElement(`span`);
    deleteButtonIcon.className = `material-icons-outlined md-18 gray`;
    deleteButtonIcon.textContent = `delete`;

    // 요소들을 서로 감싸줌
    deleteButton.append(deleteButtonIcon); // 자식 요소로 추가
    colorSelectButton.append(colorSelecInput, colorSelectButtonIcon); // firstElementChild로 먼저 클릭이 되도록 했기 때문에 제일 먼저 추가해줌
    pinButton.append(pinButtonIcon);

    noteFooter.append(pinButton, colorSelectButton, deleteButton);

    noteContainer.append(noteTitle, noteBody, noteFooter);

    return {
      noteContainer,
      noteTitle,
      noteBody,
      pinButton,
      pinButtonIcon,
      colorSelectButton,
      deleteButton,
    };
  }
}

class NoteList {
  constructor({ modal }) {
    this.elements = {
      pinnedNoteContainer: document.querySelector(
        `#pinnedNoteList > div.note-container`
      ),
      noteContainer: document.querySelector(`#noteList > div.note-container`),
    };
    this.modalObj = modal;
    this.pinnedNoteList = [];
    this.noteList = [];
    this.listChangeHandler = () => {};
  }

  show() {
    this.elements.noteContainer.parentElement.className = `notes-section`;
    this.elements.pinnedNoteContainer.parentElement.className = `notes-section`;
  }
  hide() {
    this.elements.noteContainer.parentElement.className = `notes-section hide`;
    this.elements.pinnedNoteContainer.parentElement.className = `notes-section hide`;
  }

  getPinnedNoteList() {
    return this.pinnedNoteList;
  }
  getNoteList() {
    return this.noteList;
  }

  // 위에서 만든 노트 객체가 아니라 서버로부터 받은 노트 데이터
  setAllNoteList(noteDataList) {
    const that = this;
    for (const noteData of noteDataList) {
      const noteObj = new Note({
        id: noteData.id,
        title: noteData.title,
        body: noteData.body,
        createdAt: noteData.createdAt,
        updatedAt: noteData.updatedAt,
        pinned: noteData.pinned,
        backgroundColor: noteData.backgroundColor,
        onClickNote: function (e, aNoteObj) {
          that.modalObj.setNoteId(aNoteObj.id);
          that.modalObj.setTitle(aNoteObj.title);
          that.modalObj.setBody(aNoteObj.body);
          that.modalObj.setPin(aNoteObj.pinned);
          that.modalObj.setBackGroundColor(aNoteObj.backgroundColor);
          that.modalObj.open();
        },
        // api를 호출해서 핀 여부를 바꿔줘야 해서 비동기
        onclickPin: async function (e, aNoteObj) {
          // 서버로 노트 객체 전달
          await noteService.updateNote(aNoteObj.id, {
            pinned: !aNoteObj.pinned,
          });
          // 프론트에서의 객체 상태 변경
          aNoteObj.setPin(!aNoteObj.pinned); // 핀 상태 변경하고
          that.removeNote(aNoteObj.id); // 핀 되어있던 노트라면 제거하고
          that.addNote(aNoteObj); // 일반 노트에 추가
          console.info(
            `핀 상태 변경: ${aNoteObj.pinned ? `핀 설정` : `핀 제거`}`
          );
        },
        onChangeBackgroundColor: async function (e, color, aNoteObj) {
          await noteService.deleteNote(aNoteObj.id, {
            backgroundColor: color,
          });
          aNoteObj.setBackGroundColor(color);
          console.info(`배경색 상태 변경: ${color}`);
        },
        onClickDelete: async function (e, aNoteObj) {
          await noteService.deleteNote(aNoteObj.id);
          that.removeNote(aNoteObj.id);
        },
      });
      this.addNote(noteObj);
    }
    this.listChangeHandler(this.pinnedNoteList, this.noteList);
  }

  addNote(noteObj) {
    if (noteObj.pinned) {
      this.pinnedNoteList.push(noteObj);
      this.elements.pinnedNoteContainer.prepend(noteObj.elements.noteContainer); // 최신 노트가 앞에 배치됨
    } else {
      this.noteList.push(noteObj);
      this.elements.noteContainer.prepend(noteObj.elements.noteContainer);
    }
    this.listChangeHandler(this.pinnedNoteList, this.noteList);
  }
  removeNote(id) {
    const note = this.noteList.find((note) => note.id === id); // 먼저 noteList에서 찾아봄
    if (note !== undefined) {
      // noteList에 있으면
      note.elements.noteContainer.remove();
      this.noteList = this.noteList.filter((note) => note.id !== id);
    } else {
      // pinnedNoteList에 있으면
      const pinnedNote = this.pinnedNoteList.find((note) => note.id === id);
      pinnedNote.elements.noteContainer.remove();
      this.pinnedNoteList = this.pinnedNoteList.filter(
        (note) => note.id !== id
      );
    }
  }

  onListChange(funct) {
    this.listChangeHandler = funct;
  }
}

async function init() {
  const noteDataList = await noteService.getNotes();

  const modalObj = new Modal();
  const AddNoteBarObj = new AddNoteBar({
    onClick: function (e) {
      modalObj.open();
    },
  });
  const noteListObj = new NoteList({ modal: modalObj });
  const emptyNotePlaceHolderObj = new EmptyNotePlaceHolder();

  // 노트가 추가, 삭제될 때마다 실행되는 콜백 함수
  noteListObj.onListChange((pinnedNoteList, noteList) => {
    if (pinnedNoteList.length === 0 && noteList.length === 0) {
      emptyNotePlaceHolderObj.show(); // 보여줄 노트가 없으면
      noteListObj.hide();
    } else {
      emptyNotePlaceHolderObj.hide(); // 보여줄 노트가 있으면
      noteListObj.show();
    }
  });

  // 서버로부터 받아온 noteDataList를 넣어줌
  // 핀 된 노트는 핀 노트 리스트, 일반 노트는 일반 노트 리스트로 분리됨
  noteListObj.setAllNoteList(noteDataList);

  // 모달이 닫힐 때마다 실행되는 콜백 함수
  modalObj.onclose(async (note) => {
    if (note.deleted) {
      await noteService.deleteNote(note.id);
      noteListObj.removeNote(note.id);
      return;
    }

    const allNoteList = noteListObj
      .getPinnedNoteList()
      .concat(noteListObj.getNoteList());

    if (note.id !== null && note.id !== undefined) {
      const currentNote = allNoteList.find((aNote) => aNote.id === note.id);
      if (currentNote !== undefined) {
        // 존재하는 노트라면 업데이트
        const updateNote = await noteService.updateNote(note.id, {
          title: note.title,
          body: note.body,
          pinned: note.pinned,
          backgroundColor: note.backgroundColor,
        });
        // UI 업데이트
        if (currentNote.pinned === note.pinned) {
          // 현재 노트가 핀 된 노트라면
          currentNote.setTitle(note.tile);
          currentNote.setBody(note.body);
          currentNote.setPin(note.pinned);
          currentNote.setBackGroundColor(note.backgroundColor);
        } else {
          // 핀 된 노트가 아니라면
          noteListObj.removeNote(note.id);
          noteListObj.addNote(
            new Note({
              id: updateNote.id,
              title: updateNote.title,
              body: updateNote.body,
              pinned: updateNote.pinned,
              backgroundColor: updateNote.backgroundColor,
              createdAt: updateNote.createdAt,
              updatedAt: updateNote.updatedAt,
            })
          );
        }
      }
    } else {
      // 존재하지 않는 노트라면 새로 생성
      const result = await noteService.createNote({
        title: note.title,
        body: note.body,
        pinned: note.pinned,
        backgroundColor: note.backgroundColor,
      });

      // 서버로부터 받은 정보
      const { id, createdAt, updatedAt } = result;

      const newNote = new Note({
        id,
        title: note.title,
        body: note.body,
        createdAt,
        updatedAt,
        pinned: note.pinned,
        backgroundColor: note.backgroundColor,
        onClickNote: function (e, aNoteObj) {
          modalObj.setNoteId(aNoteObj.id);
          modalObj.setTitle(aNoteObj.title);
          modalObj.setBody(aNoteObj.body);
          modalObj.setPin(aNoteObj.pinned);
          modalObj.setBackGroundColor(aNoteObj.backgroundColor);
          modalObj.open();
        },
        // api를 호출해서 핀 여부를 바꿔줘야 해서 비동기
        onclickPin: async function (e, aNoteObj) {
          // 서버로 노트 객체 전달
          await noteService.updateNote(aNoteObj.id, {
            pinned: !aNoteObj.pinned,
          });
          // 프론트에서의 객체 상태 변경
          aNoteObj.setPin(!aNoteObj.pinned); // 핀 상태 변경하고
          noteListObj.removeNote(aNoteObj.id); // 핀 되어있던 노트라면 제거하고
          noteListObj.addNote(aNoteObj); // 일반 노트에 추가
          console.info(
            `핀 상태 변경: ${aNoteObj.pinned ? `핀 설정` : `핀 제거`}`
          );
        },
        onChangeBackgroundColor: async function (e, color, aNoteObj) {
          await noteService.updateNote(aNoteObj.id, {
            backgroundColor: color,
          });
          aNoteObj.setBackGroundColor(color);
          console.info(`배경색 상태 변경: ${color}`);
        },
        onClickDelete: async function (e, aNoteObj) {
          await noteService.updateNote(aNoteObj.id);
          noteListObj.removeNote(aNoteObj.id);
        },
      });

      // 노트 생성
      noteListObj.addNote(newNote);
    }
  });
}

init();

/**
 * 의존
 *
 * Modal
 * AddNoteBar -> Modal
 * EmptyNotePlaceholder
 * Note -> Modal
 * NoteList -> EmptyNotePlaceholder, Note
 */
