let getData = async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    }
    catch (error) {
      console.log("error", error);
    }
}

let selectData = async (data) => {
  try {
      const entry = {
          lat: data.geonames[0].lat,
          lng: data.geonames[0].lng,
          country: data.geonames[0].countryName,
          code: data.geonames[0].countryCode,
      }
      return entry;
  }
  catch (error) {
      console.log("error", error);
  }
}

export { getData };
export { selectData };