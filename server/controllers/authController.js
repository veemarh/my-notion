const users = [{username: 'admin', password: '123'}];

export const registerUser = (req, res) => {
    const {username, password} = req.body;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.json({message: 'Пользователь с таким именем уже существует'});
    }

    users.push({username, password});
    res.json({message: 'Регистрация успешна'});
};

export const loginUser = (req, res) => {
    const {username, password} = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.json({message: 'Неверное имя пользователя или пароль'});
    }

    res.json({message: 'Вход успешен'});
};
