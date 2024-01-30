import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID -y8t31otbYukXAX_FFhZXD-Cr2zNQMwbTFSh2dxSV1I",
      },
      params: {
        query: term,
      },
    });
    // console.log(response, "response");
    return response.data.results;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};

export default searchImages;
