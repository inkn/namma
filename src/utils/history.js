import paper from "paper";
class History {
  constructor(limit) {
    this.limit = limit;
    this.history = [];
    this.current = 0;
  }
  add(action) {
    this.history.splice(this.current, this.history.length); // 删除分支
    if (this.history.length >= this.limit) {
      // 删除溢出
      this.history.shift();
    }
    // 新增新 action
    this.history.push(action);
    this.current = this.history.length;
    sessionStorage.vdarw = paper.project.exportJSON();
    window.eventBus.emit("updateLayers");
    
  }
  undo() {
    if (this.canUndo()) {
      this.history[--this.current].unexec();
      window.eventBus.emit("updateLayers");
    }
  }
  redo() {
    if (this.canRedo()) {
      this.history[this.current++].exec();
      window.eventBus.emit("updateLayers");
    }
  }
  canUndo() {
    return this.current > 0;
  }
  canRedo() {
    return this.history.length > this.current;
  }
  clear() {
    this.history = [];
    this.current = 0;
    sessionStorage.vdarw = "[]";
  }
}

// Default size 20
export default new History(20);
