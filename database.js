// database.js
const users = [
    { username: 'professor', password: '1234', type: 'professor' },
    { username: 'aluno', password: '5678', type: 'aluno' }
];

function authenticate(username, password, userType) {
    for (let user of users) {
        if (user.username === username && user.password === password && user.type === userType) {
            return true;
        }
    }
    return false;
}
