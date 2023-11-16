export type EventType = string

// An event handler can take an optional event argument
// and should not return a value
export type Handler<T = any> = (event?: T) => void
export type WildcardHandler = (event: any, type?: EventType) => void

// An array of all currently registered event handlers for a type
export type EventHandlerList = Array<Handler>
export type WildCardEventHandlerList = Array<WildcardHandler>

// A map of event types and their corresponding event handlers.
export type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>

export interface Emitter {
  // all: EventHandlerMap

  on<T = any>(type: EventType, handler: Handler<T>): void
  on(type: '*', handler: WildcardHandler): void

  off<T = any>(type: EventType, handler: Handler<T>): void
  off(type: '*', handler: WildcardHandler): void

  emit<T = any>(type: EventType, event?: T): void
  emit(type: '*', event?: any): void
}

export class EventBus implements Emitter {
  private readonly all: EventHandlerMap = new Map()
  on(type: EventType, handler: WildcardHandler): void {
    const handlers = this.all.get(type)
    const added = handlers && handlers.push(handler)
    if (!added) {
      this.all.set(type, [handler])
    }
  }

  once(type: EventType, handler: WildcardHandler): void {
    const wrappedHandler: WildcardHandler = (event: any) => {
      this.off(type, wrappedHandler)
      handler(event, type)
    }
    const handlers = this.all.get(type)
    const added = handlers && handlers.push(wrappedHandler)
    if (!added) {
      this.all.set(type, [wrappedHandler])
    }
  }

  off(type: EventType, handler: WildcardHandler): void {
    const handlers = this.all.get(type)
    if (handlers) {
      handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    }
  }

  emit(type: EventType, event?: any): void {
    ;((this.all.get(type) || []) as WildCardEventHandlerList).slice().forEach((handler) => {
      handler(event, type)
    })
    ;((this.all.get('*') || []) as WildCardEventHandlerList).slice().forEach((handler) => {
      handler(event, type)
    })
  }
}
