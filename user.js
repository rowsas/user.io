document.getElementById('fetchButton').addEventListener('click', fetchUsers);

async function fetchUsers() {
const profilesContainer = document.getElementById('profiles');
const profilesTableBody = document.getElementById('profilesTable').querySelector('tbody');
profilesContainer.innerHTML = ''; // Clear previous profiles
profilesTableBody.innerHTML = ''; // Clear previous table data

try {
const response = await fetch('https://randomuser.me/api/?results=5');
const data = await response.json();
const users = data.results;

users.forEach(user => {

const profileCard = document.createElement('div');
profileCard.className = 'profile-card';
profileCard.innerHTML = `
<img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
<h3>${user.name.first} ${user.name.last}</h3>
<p>${user.email}</p>
`;
profilesContainer.appendChild(profileCard);


const row = document.createElement('tr');
row.innerHTML = `
<td>${user.name.first} ${user.name.last}</td>
<td>${user.email}</td>
`;
profilesTableBody.appendChild(row);
});
} catch (error) {
console.error('Error fetching user data:', error);
}
}

fetchUsers();