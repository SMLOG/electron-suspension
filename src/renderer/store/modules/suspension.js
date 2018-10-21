import storejs from 'storejs'

const state = {
    show: storejs.get('showSuspension')
};

const actions = {
    showSuspension: function ({state, commit}) {
        let status = true;
        storejs.set('showSuspension', status);
        state.show = status;
    },

    hideSuspension: function ({state, commit}) {
        let status = false;
        storejs.set('showSuspension', status);
        state.show = status;
    },
};

export default ({
    state,
    actions
});
