let getImage = async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    }
    catch (error) {
      console.log("error", error);
    }
}

let defineImage = async (pic) => {
    try {
        const image = {
            url: pic[2].hits[0].webformatURL,
        }
        return image;
    }
    catch (error) {
        console.log("error", error);
    }
}

export { getImage };
export { defineImage };