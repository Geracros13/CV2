import { useState, useEffect } from "react";

const api = "https://us-central1-cvgerardo.cloudfunctions.net/api";

const useGetData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return data;
};

export default useGetData;
