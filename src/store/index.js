import {
    createStore
} from 'vuex'

export default createStore({
    state: {

        tickets: [{
                id: 1,
                name: "Alfreds Futterkiste",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                priority: 'normal'
                    },
            {
                id: 2,
                name: "Rameez Bhatti",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                priority: 'high'
                    }
                ]


    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
