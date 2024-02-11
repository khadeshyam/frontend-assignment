// CatContext.tsx
import React, { useState, Dispatch, SetStateAction } from 'react';
interface Cat {
	id: string;
	url: string;
}

interface CatContextProps {
	cat: Cat | null;
	isLoading: boolean;
	setCat: Dispatch<SetStateAction<Cat | null>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const CatContext = React.createContext<CatContextProps>({
	cat: null,
	isLoading: false,
	setCat: () => {},
	setIsLoading: () => {},
});

interface CatProviderProps {
	children: React.ReactNode;
}

const CatProvider: React.FC<CatProviderProps> = ({ children }) => {
	const [cat, setCat] = useState<Cat | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	return (
		<CatContext.Provider value={{ cat, isLoading, setCat, setIsLoading }}>
			{children}
		</CatContext.Provider>
	);
};

export { CatContext, CatProvider };