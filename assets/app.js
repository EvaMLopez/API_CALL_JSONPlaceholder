async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
                
        const tableBody = document.getElementById('usersTable');
        tableBody.innerHTML = '';
        console.log(users);
        
        users.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.id;
            row.insertCell(1).textContent = user.name;
            row.insertCell(2).textContent = user.address.city;
        });
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}

async function getUserById() {
    const userId = document.getElementById('userIdShow').value;
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();  
        
        const userDetails = document.getElementById('userDetails');
        userDetails.innerHTML = '';
        const row = userDetails.insertRow();
        row.insertCell(0).textContent = user.name;
        row.insertCell(1).textContent = user.phone;

        userDetailsTable.style.display = 'table';
        
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }    
}

getUsers();

const getUser = document.getElementById('getUserId');
getUser.addEventListener('click', getUserById);

