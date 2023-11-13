import { defineStore } from "pinia";
import { ref } from "vue";
import tools from "@/tools/index";


export const useCanvasStore = defineStore<any>('canvas', () => {
    const toolName = ref(null);
    const room = ref(null);
    const user = ref(null);
    const socketLock = ref(false);
    const canvasArgs = ref({
        bgColor: "#fff"
    });
    const pencilArgs = ref({
        color: "#000000",
        size: 10,
        shake: true
    });
    const eraserArgs = ref({
        size: 20
    });
    const brushArgs = ref({
        color: "#000000",
        size: 20,
        shake: true
    });
    const setTool = (tName: any) => {
        if (tName && tools[tName].onToggleOut) {
            tools[tName].onToggleOut();
        }
        toolName.value = tName;
        if (tools[tName]) {
            tools[tName].activate();
            if (tools[tName].onToggleIn) {
                tools[tName].onToggleIn();
            }
        }
    };
    const setArgs = function({ toolName: tName, color, size, shake }: any) {
        console.log(tools)
        const tool = window.app.canvasStore[tName + "Args"];
        tool.color = color || tool.color;
        tool.size = size || tool.size;
        if (shake !== undefined) {
            tool.shake = shake;
        }
    };
    const setCanvasArgs = (args: any) => {
        Object.assign(canvasArgs, args);
    };
    const setRoom = (room: any) => {
        room.value = room;
    };
    const setUser = (user: any) => {
        user.value = Object.assign(user.value || {}, user);
    };
    const lockSocket = () => {
        socketLock.value = true;
    };
    const unLockSocket = () => {
        socketLock.value = false;
    };

    const result = { toolName, room, user, socketLock, canvasArgs, pencilArgs, eraserArgs, brushArgs, setTool, setArgs, setCanvasArgs, setRoom, setUser, lockSocket, unLockSocket }
    return result
})


