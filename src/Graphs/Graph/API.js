const CORS_PROXY = "";
const API_PATH = "";

const getHistoricalDataURL = (symbol, period_begin, period_end) => {
	if (!API_PATH || !CORS_PROXY) {
		return false;
	}

	return `${CORS_PROXY}${encodeURIComponent(
		`${API_PATH}${symbol}.BK?period1=${period_begin}&period2=${period_end}&interval=1d&events=history`
	)}`;
};

export default getHistoricalDataURL;
