import axios from "axios";

export const fetchCat = async () => {
	const response = await axios.get("https://api.thecatapi.com/v1/images/search?has_breeds=1");
	return response.data[0];
};