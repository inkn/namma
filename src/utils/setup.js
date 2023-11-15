import hotkey from "@/utils/hotkey";
import { panAndZoom } from "@/utils/panandzoom";
import paper from "paper";
import { createLayer,clearProject } from "./shared";
export default function(app) {
  paper.setup(app.canvas);
  paper.tool = null;
  hotkey(app);
  document.getElementById("canvas").addEventListener("wheel", event => {
    panAndZoom(event);
    app.vdrawArgs.zoom = paper.view.zoom;
  });
  clearProject()
  createLayer();
  paper.project.importJSON(window.sessionStorage.vdarw || []);
  app.vdrawArgs.size = paper.view.size;
  app.vdrawArgs.zoom = paper.view.zoom;
  app.isInit = true;
}
