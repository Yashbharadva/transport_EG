module.exports = {
	toPascalCase: (str) => {
		if (typeof (str) === "string") {
			let data = str.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase())
			return data
		} else {
			return str;
		}
	}
};