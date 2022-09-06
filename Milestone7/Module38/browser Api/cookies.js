const getCookies = (name) => {
    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');
    const cookie = cookieArray.find(c => c.includes(name));
    if (cookie) {
        const cookieValue = cookie.split('=')[1];
        return cookieValue;
    }
}

getCookies('country');

// console a run korao. jekono web site a gia.