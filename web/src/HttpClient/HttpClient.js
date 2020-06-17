import axios from "axios";
export default class HttpClient {


    constructor(context) {
        this.context = context;
    }

    sendDemoRequest = async () => {
        var accessToken = await this.context.getToken();
        let config = {
            headers: {
                Authorization: `Bearer ${accessToken.accessToken}`,
            }
        }

        var response = await axios.get("https://localhost:5001/Mock/GetData", config);
        return response.data
    }
}