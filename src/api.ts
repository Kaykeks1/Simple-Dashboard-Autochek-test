export const fetchPermitsRequest = async () => {
  try {
    const response = await fetch("https://data.cityofchicago.org/resource/ydr8-5enu.json?$limit=10&$order=issue_date DESC");
    console.log('response: ', response);
    const data = await response.json();
    console.log('data: ', data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPermitRequest = async (id: number) => {
  try {
    const response = await fetch(`https://data.cityofchicago.org/resource/ydr8-5enu.json?id=${id}`);
    console.log('response: ', response);
    const data = await response.json();
    console.log('data: ', data);
    return data.length > 0 ? data[0] : {};
  } catch (e) {
    console.log(e);
  }
};