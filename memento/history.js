class History {
  constructor() {
    this._history = [];
  }

  popHistory() {
    return this._history.pop();
  }

  pushHistory(editorState) {
    this._history.push(editorState);
  }
}

module.exports = History;
