export const AUTH_CHANGED_EVENT = 'auth-changed';

export function setAuthUser(user: string | null): void {
	if (typeof window === 'undefined') return;
	if (user) {
		sessionStorage.setItem('user', user);
	} else {
		sessionStorage.removeItem('user');
	}
	window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export function getIsLoggedIn(): boolean {
	if (typeof window === 'undefined') return false;
	return !!sessionStorage.getItem('user');
}



