export const CacheHandlers = {
	_retrieve: function (key: string) {
		const item = localStorage.getItem(key);
		return item;
	},
	_store: function (key: string, value: string) {
		localStorage.setItem(key, value);
	},
};
