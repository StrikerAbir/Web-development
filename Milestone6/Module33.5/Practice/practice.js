// 1. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।
// fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(json => console.log(json));

// 2. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
/*
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(json => displayData(json));
}

const displayData = (data) => {
    const container = document.getElementById('comment-container');
    data.forEach(coms => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerText = coms.body;
        container.appendChild(div);
    })
    
}*/

// 5.ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(json => displayData(json));
}

const displayData = (data) => {
    const container = document.getElementById('comment-container');
    data.forEach(coms => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
            <h3>${coms.name}</h3>
            <p>${coms.body}</p>
            <button onclick="loadDetails(${coms.id})">Details</button>
        `
        container.appendChild(div);
    })
}

const loadDetails = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`).then((response) => response.json()).then((data) => displayDetails(data))
}
const displayDetails = (data) => {
    const container = document.getElementById("details-container");
    container.innerHTML = ``;
    data.forEach(coms => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${coms.name}</h3>
            <p>${coms.email}</p>
        `
        container.appendChild(div);
    })
}

// 3. তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।
// loadData();