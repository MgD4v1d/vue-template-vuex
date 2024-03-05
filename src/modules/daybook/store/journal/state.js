
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Eu aute mollit mollit voluptate ad reprehenderit ad voluptate elit ipsum sint veniam sunt culpa.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Dolor exercitation proident incididunt id do amet esse ad dolor.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Anim tempor sit ullamco voluptate officia et anim.',
            picture: null
        },
    ]
})