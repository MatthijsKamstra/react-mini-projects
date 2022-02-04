import { useState, useEffect } from "react";

/**
 * @example
 * 			const [update, setUpdate] = useCookie("foobar", "");
 *
 * @param {*} key				localstorage key (find value)
 * @param {*} defaultValue		if not set, use this as default
 * @param {*} days				if not set, session, otherwise in days
 * @returns
 */
export function useCookie(key, defaultValue, days) {

	const getCookieValue = (key, defaultValue) => {
		var nameEQ = key + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return defaultValue;
	};

	const [value, setValue] = useState(() => {
		return getCookieValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		// sessionStorage.setItem(key, JSON.stringify(value));
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
		document.cookie = key + "=" + (value || "") + expires + "; path=/";
	}, [key, value, days]);

	return [value, setValue];
}


export function removeCookie(key) {
	document.cookie = key + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// export const setCookie = (name, value, days) => {
// 	var expires = "";
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
// 		expires = "; expires=" + date.toUTCString();
// 	}
// 	document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// export const getCookie = (name) => {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
// 		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
// 	}
// 	return null;
// }

// export const eraseCookie = (name) => {
// 	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }