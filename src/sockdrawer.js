var eventMap = function(socket, obj) {
	if (socket && typeof obj === 'object') {
		for (var ev in obj) {
			if (!obj[ev]) {
				obj[ev] = function(){};
			}
			if (typeof obj[ev] === 'function') {
				socket.on(ev, obj[ev]);
			}
		}
	}
};

module.exports = eventMap;
