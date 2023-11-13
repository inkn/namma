import paper from "paper";
import history from "@/utils/history";
import { DrawAction } from "@/utils/actions";
const local = {
  path: null,
  show: null
};
const args = {
  lastSize: 0,
  lastColor: "#00000FF"
};

const onMouseMove = event => {
  if (
    !local.show ||
    local.show.layer !== paper.project.activeLayer ||
    args.lastSize !== window.app.canvasStore.pencilArgs.size ||
    args.lastColor !== window.app.canvasStore.pencilArgs.color
  ) {
    if (local.show) {
      local.show.remove();
    }
    local.show = null;
    local.show = new paper.Path.Circle({
      center: [0, 0],
      radius: window.app.canvasStore.pencilArgs.size / 2,
      fillColor: window.app.canvasStore.pencilArgs.color
    });
    args.lastSize = window.app.canvasStore.pencilArgs.size;
    args.lastColor = window.app.canvasStore.pencilArgs.color;
  }
  local.show.position = event.point;
};

const onMouseDown = event => {
  local.path = new paper.Path();
  local.path.strokeColor = window.app.canvasStore.pencilArgs.color;
  local.path.strokeWidth = window.app.canvasStore.pencilArgs.size;
  local.path.strokeCap = "round";
  local.path.strokeJoin = "round";
  local.path.add(event.point);
};

const onMouseDrag = event => {
  if (!local.path) return;
  local.path.add(event.point);
};

const onMouseUp = event => {
  local.path.add(event.point);
  if (window.app.canvasStore.pencilArgs.shake) {
    local.path.simplify();
  }
  history.add(
    new DrawAction({
      path: local.path
    })
  );
  local.path = null;
  if (local.show) local.show.remove();
  local.show = null;
};

const onToggleIn = () => {};
const onToggleOut = () => {
  if (local.show) local.show.remove();
  local.show = null;
};
export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
tool.onMouseMove = onMouseMove;
tool.onToggleIn = onToggleIn;
tool.onToggleOut = onToggleOut;
