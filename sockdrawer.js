var eventMap = function(socket, obj) {
	if (socket) {
		for (var ev in obj) {
			if (typeof obj[ev] === 'function') {
				socket.on(ev, obj[ev]);
			}
		}
	}
};

module.exports = eventMap;
