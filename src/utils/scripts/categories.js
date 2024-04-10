export async function fetchCategories() {
    try {
        const response = await fetch('/src/assets/json/websiteCategories.json');
        if (!response.ok) {
            throw new Error('HTTP code ' + response.status);
        }
        const data = await response.json()
        return data;
    } catch (e) {
        console.error('Error fetching data: ' + e);
    }
}

export async function fetchCategory(name) {
    return (await this.fetchCategories()).find(item => item.name === name).websites || [];
}

export async function getRandomWebsite() {
    let categories = await fetchCategories();
    let categoryIdx = Math.floor(Math.random() * categories.length - 1); // exclude last category
    let websiteIdx = Math.floor(Math.random() * categories[categoryIdx].websites.length);
    return categories[categoryIdx].websites[websiteIdx];
}