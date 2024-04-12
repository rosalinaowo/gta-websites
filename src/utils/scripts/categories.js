export async function fetchCategories() {
    try {
        const response = await fetch('/src/assets/json/websiteCategories.json');
        if (!response.ok) {
            throw new Error('HTTP code ' + response.status);
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching data: ' + error);
    }
}

export async function fetchCategory(name) {
    return (await this.fetchCategories()).find(item => item.name === name).websites || [];
}

export async function getRandomWebsite() {
    let categories = await this.fetchCategories();
    let categoryIdx = Math.floor(Math.random() * categories.length);
    let websiteIdx = Math.floor(Math.random() * categories[categoryIdx].websites.length);
    return categories[categoryIdx].websites[websiteIdx];
}

export async function getNRandomWebsites(n) {
    let categories = await this.fetchCategories();
    let arr = [];
    let website, categoryIdx, websiteIdx;
    try {
        while (arr.length < n) {
            website = null;
            while (arr.includes(website) || !website) {
                categoryIdx = Math.floor(Math.random() * categories.length);
                websiteIdx = Math.floor(Math.random() * categories[categoryIdx].websites.length);
                website = categories[categoryIdx].websites[websiteIdx];
            }
            arr.push(website);
        }
    } catch (error) { console.error('Error initializing array: ' + categoryIdx, error); }
    
    return arr;
}