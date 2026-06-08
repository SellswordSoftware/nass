export type Signal<T> = {
  (): T;
  (value: T): T;
};

export type Computed<T> = () => T;
export type Subs = Set<() => void>;
export type ReactiveKind = "signal" | "computed" | "effect";
export type ReactiveDebugEventType =
  | "signal:get"
  | "signal:set"
  | "signal:set-same"
  | "signal:notify"
  | "computed:get"
  | "computed:recompute"
  | "computed:dirty"
  | "computed:notify"
  | "effect:run"
  | "effect:dispose"
  | "dependency:track";

export interface ReactiveDebugOptions {
  label?: string;
  debug?: boolean;
}

export interface ReactiveDebugEvent {
  seq: number;
  type: ReactiveDebugEventType;
  id: number;
  kind: ReactiveKind;
  label: string;
  timestamp: number;
  subscriberCount?: number;
  value?: unknown;
  previousValue?: unknown;
  observer?: string;
  observerKind?: string;
  source?: string;
  sourceKind?: string;
  dependencyCount?: number;
  message?: string;
  details?: Record<string, unknown>;
}

export interface ReactiveDebugConfig {
  enabled: boolean;
  events?: ReactiveDebugEventType[];
  include?: string[];
  exclude?: string[];
  sink?: (event: ReactiveDebugEvent) => void;
  valueFormatter?: (value: unknown) => unknown;
}

export interface VirtualOptions {
  rowHeight: number;
}

export interface ListOptions {
  virtual?: VirtualOptions;
}

export interface CleanupCollector {
  add: (...cleanups: Array<(() => void) | null | undefined | false>) => void;
  run: () => void;
}

export interface Component<T extends Element = Element> {
  html: string;
  el?: T;
  refs: Record<string, Element>;
  mount: (parent: Element) => void;
  unmount?: () => void;
}

export interface ComponentContext<T extends Element = Element> {
  host: Element;
  root: T | undefined;
  refs: Record<string, Element>;
  cleanup: CleanupCollector;
  component: Component<T>;
}

export interface TemplateOptions<T extends Element = Element> {
  root?: string;
  onMount?: (el: T | undefined, parent: Element, ctx: ComponentContext<T>) => void;
  onUnmount?: (ctx: ComponentContext<T>) => void;
}

export interface RawHtml {
  __raw: true;
  html: string;
}

export type TemplateValue =
  | Component
  | string
  | number
  | boolean
  | null
  | undefined
  | RawHtml;

export function setReactiveDebug(
  nextConfig: boolean | Partial<ReactiveDebugConfig>,
): ReactiveDebugConfig;
export function getReactiveDebugConfig(): ReactiveDebugConfig;
export function signal<T>(initialValue: T, options?: ReactiveDebugOptions): Signal<T>;
export function computed<T>(fn: () => T, options?: ReactiveDebugOptions): Computed<T>;
export function effect(fn: () => void, options?: ReactiveDebugOptions): () => void;
export function untrack<T>(fn: () => T): T;
export function text(s: string): string;
export function $<T extends Element = Element>(
  selector: string,
  root?: Element | Document,
): T | null;
export function $$<T extends Element = Element>(
  selector: string,
  root?: Element | Document,
): T[];
export function listener<T extends EventTarget = EventTarget>(
  el: T | null | undefined,
  event: string,
  handler: (...args: any[]) => void,
): () => void;
export function fx<T extends Element>(
  el: T | null | undefined,
  fn: (el: T) => void,
): () => void;
export function show(
  el: HTMLElement | null | undefined,
  condition: () => any,
): () => void;
export function hide(
  el: HTMLElement | null | undefined,
  condition: () => any,
): () => void;
export function model<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  V,
>(
  el: T | null,
  sig: Signal<V>,
  options?: { reactive?: boolean },
): { el: T | null; cleanup: () => void };
export function list<T>(
  container: Element | null,
  templateEl: HTMLTemplateElement | string | null,
  items: () => T[],
  key: (item: T) => string | number,
  setup: (el: Element, item: () => T, index: () => number) => void | (() => void),
  options?: ListOptions,
): () => void;
export function cleanupCollector(...initial: Array<() => void>): CleanupCollector;
export function requireRef<T extends Element>(
  refs: Record<string, Element>,
  name: string,
): T;
export function requireElement<T extends Element>(
  root: ParentNode,
  selector: string,
  description: string,
): T;
export function raw(html: string): RawHtml;
export function collectRowRefs(el: Element): Record<string, Element>;
export function when<T>(
  condition: () => T,
  thenBranch: (value: T) => Component,
  elseBranch?: (value: T) => Component,
): Component;
export function template<T extends Element = Element>(
  options: TemplateOptions<T>,
): (strings: TemplateStringsArray, ...values: TemplateValue[]) => Component<T>;
export function template<T extends Element = Element>(
  strings: TemplateStringsArray,
  ...values: TemplateValue[]
): Component<T>;
export function mount<T extends Element = Element>(
  component: Component<T>,
  host: Element | null,
): Component<T>;
export function attr(
  el: Element | null | undefined,
  name: string,
  value: () => string | boolean | null,
): () => void;
export function setText(
  el: Element | null | undefined,
  getter: () => unknown,
): () => void;
