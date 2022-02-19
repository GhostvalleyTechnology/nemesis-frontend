import { writable } from 'svelte/store';
export const admin  = writable(false);
// @ts-ignore
export const production: boolean = app_run_mode_production;
export const snackbar = writable('');