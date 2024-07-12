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
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h06f49d135718786c: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hddde29fc358fb3b0: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h63ccd776f7523bee: (a: number, b: number, c: number, d: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h1605b900a9db4e53: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke0_mut__h226ba6531198472e: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__ha5a0de8b8a982b30: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc5d7efefbfc992d8: (a: number, b: number, c: number) => void;
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
