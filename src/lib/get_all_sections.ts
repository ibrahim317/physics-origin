import axios from "axios";

const getSection = async () => {

    const instance = axios.create({ // creating an instance to get a specific thing
        baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
    });

    try { // now we are getting this specific thing
        const sections = await instance.get("/api/section"); //getting it from the path provided
        return await sections.data; // return the data the instance got
    } catch (err) {
        throw err;
    }

};

export default getSection; // exporting it to use it otherwhere