class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    const eventFn = this.events[eventName];
    if (!eventFn) {
      // TODO：
      this.events[eventName] = [fn];
    } else {
      this.events[eventName].push(fn);
    }
  }

  emit(eventName, ...args) {
    const eventsFn = this.events[eventName];
    if (!eventsFn) {
      console.log("没有注册" + eventName + "事件");
      return;
    }
    if (eventsFn.length > 0) {
      eventsFn.forEach((fn) => {
        fn.apply(this, args);
      });
    }
  }

  once(eventName) {
    this.on(eventName);
  }

  off(eventName) {
    const eventsFn = this.events[eventName];
    if (eventsFn) {
      console.log("卸载了事件: " + eventName);
      this.events[eventName] = undefined;
    }
  }
}

const eventBus = new Events();

eventBus.on("test", (args) => {
  console.log("这是events: ", args);
});

eventBus.on("test", (data) => {
  console.log(data);
  console.log("我是第二个事件");
});

eventBus.emit("test", { type: 1 });
eventBus.emit("test");
eventBus.off("test");
