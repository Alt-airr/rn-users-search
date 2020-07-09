import {API_URL} from "../constants/constants";

export const useFetchUsers = async ({setUsers, setLoading}) => {
            try {
                const response = await fetch(API_URL);
                const fetchedData = await response.json();
                setUsers(fetchedData.results);
                setLoading(false)
            } catch (e) {
                console.log('error : ', e)
            }
}
