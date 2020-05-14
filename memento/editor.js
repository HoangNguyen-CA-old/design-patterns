const History = require('./history');
const EditorState = require('./editorState');
class Editor {
  constructor() {
    this._data = '';
  }

  createState() {
    return new EditorState(this._data);
  }

  restoreState(editorState) {
    this._data = editorState.getData();
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const editor = new Editor();
const history = new History();

editor.setData(1);
history.pushHistory(editor.createState());

editor.setData(2);
history.pushHistory(editor.createState());

editor.setData(3);
history.pushHistory(editor.createState());

editor.setData(0);
editor.restoreState(history.popHistory());
editor.restoreState(history.popHistory());
editor.restoreState(history.popHistory());

console.log(editor.getData());
