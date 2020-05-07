const id = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
}


const data = [
    {
        id: id(),
        code: '4100',
        value: '15000',
        date: '10/10/10',
        cashPercent: '5',
        cashValue: '1200'
    },
    {
        id: id(),
        code: '4111',
        value: '15000',
        date: '10/10/10',
        cashPercent: '5',
        cashValue: '1200'
    },
    {
        id: id(),
        code: '4158',
        value: '15000',
        date: '10/10/10',
        cashPercent: '5',
        cashValue: '1200'
    },
    {
        id: id(),
        code: '4178',
        value: '15000',
        date: '10/10/10',
        cashPercent: '5',
        cashValue: '1200'
    },

]

const users = [
    {
        'name': 'Felipe',
        'email': 'felipe@felipe.com',
        'password': '123456'
    }
]

export { data, users }
