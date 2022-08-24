document.getElementById('apply-bg').addEventListener('click',function(){
    const friend = document.getElementsByClassName('friend-name');
    for (f of friend) {
        f.style.backgroundColor ='tomato'
    }
})
document.getElementById('center').addEventListener('click',function(){
    const friend = document.getElementById('friend-3');
    friend.style.textAlign = 'center';
   
})
document.getElementById('add').addEventListener('click',function(){
    const friends = document.getElementById('friends');
    const div = document.createElement('div');
    div.innerHTML = `
     <h3 class="friend-name">Friend new</h3>
                <p>Voluptate maiores vitae quaerat rerum.</p>
    `
    friends.appendChild(div);
    
   
})
