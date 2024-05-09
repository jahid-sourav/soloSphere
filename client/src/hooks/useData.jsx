import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

function useData() {
  const { user } = useAuth;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["bids"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/bid-requests/${user?.email}`
      );
      const data = await response.json();
      return data;
    },
  });
  return { data, isLoading, refetch };
}

export default useData;
