// useFetchCat.ts
import { useContext, useEffect } from "react";
import { CatContext } from "../contexts/CatContext";
import { fetchCat as fetchCatFromApi } from "../services/api";

const useFetchCat = () => {
	const { cat, setCat, isLoading, setIsLoading } = useContext(CatContext);

	const fetchCat = async () => {
		setIsLoading(true);
		try {
			const cat = await fetchCatFromApi();
			setCat(cat);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCat();
	}, []);

	return { cat, fetchCat, isLoading };
};

export default useFetchCat;