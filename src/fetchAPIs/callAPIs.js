import {baseURL} from "../ultils/constants"
import axios from "axios";

export default async function callApi(...httpRequest) {
    const {method, url} = httpRequest[0];
    try {
        const fetchApi = await axios({method, url, baseURL});
        return fetchApi;
    } catch (e) {
        return {
            error: e
        }
    }

}
