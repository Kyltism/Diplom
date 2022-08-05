export const getData = async () => {
    const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
    const data = await response.json();
    return data;
}