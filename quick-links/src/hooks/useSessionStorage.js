import { useState, useEffect } from "react";

/**
 *  the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
 * sessionStorage data gets cleared when the page session ends — that is, when the page is closed.
 *
 * @example
 * 			const [update, setUpdate] = useSessionStorage("foobar", "");
 *
 * @param {*} key				localstorage key (find value)
 * @param {*} defaultValue		if not set, use this as default
 * @returns
 */
export function useSessionStorage(key, defaultValue) {

	const getSessionValue = (key, defaultValue) => {
		const saved = sessionStorage.getItem(key);
		const initial = saved !== null ? JSON.parse(saved) : defaultValue;
		return initial;
	};

	const [value, setValue] = useState(() => {
		return getSessionValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export function removeSessionStorage(key) {
	sessionStorage.removeItem(key);
}