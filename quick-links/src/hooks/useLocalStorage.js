import { useState, useEffect } from "react";

/**
 *  the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
 * except that while localStorage data has no expiration time
 *
 * @example
 * 			const [update, setUpdate] = useLocalStorage("foobar", "");
 *
 * @param {*} key				localstorage key (find value)
 * @param {*} defaultValue		if not set, use this as default
 * @returns
 */
export function useLocalStorage(key, defaultValue) {

	function getStorageValue(key, defaultValue) {
		// getting stored value
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem(key);
			const initial = saved !== null ? JSON.parse(saved) : defaultValue;
			return initial;
		}
	}

	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}


export function removeLocalStorage(key) {
	localStorage.removeItem(key);
}