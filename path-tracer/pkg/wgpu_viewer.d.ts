/* tslint:disable */
/* eslint-disable */
/**
* @param {number} width
* @param {number} height
* @returns {ViewerProxyWrapper}
*/
export function run_wgpu_viewer(width: number, height: number): ViewerProxyWrapper;
/**
*/
export class ViewerProxyWrapper {
  free(): void;
/**
* @param {number} width
* @param {number} height
*/
  resize_viewport(width: number, height: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_viewerproxywrapper_free: (a: number) => void;
  readonly viewerproxywrapper_resize_viewport: (a: number, b: number, c: number) => void;
  readonly run_wgpu_viewer: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke0_mut__hf7144ae5a979c8f2: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h1cf654e13c382ef1: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4e834517f3dc295e: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h7d74318cf043c87b: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__hb03414766f2ad161: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
