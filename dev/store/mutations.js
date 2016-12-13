import types from './mutation-types';

export default {
    [types.UPDATE_INFO](state, infoObj) {
        state[infoObj.type] = infoObj.info;

        console.log(`========== set ${infoObj.type} successfully`);
    },
};
