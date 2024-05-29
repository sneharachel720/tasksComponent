import {createStore} from 'vuex';
import axios from 'axios';

const store = createStore({
    state () {
        return {
            userDetails: [],
        }
    },

    actions: {
        getUserDetails(context){
            return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                context.commit('SET_USERDETAILS',data);
                console.log(data);
                return data;
            })
            .catch((error) => {
                console.log('Error!!!!!',error)
            })
        }
    },

    mutations: {
        SET_USERDETAILS (state,userDetails){
            state.userDetails = userDetails
        }
    },
    // getters: {
    //     userDetails(state){
    //         return state.userDetails
    //     }
    // }
})

export default store;