import { useState } from "react";

export const useRequestLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    return {isLoading, onChangeLoadingStatus: (value: boolean) => setIsLoading(value) };
}