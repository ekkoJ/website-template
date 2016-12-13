import types from './mutation-types';

import contentful from 'contentful-management';

const accessToken = '31091dca9128fe769d67d8ea32d03f991a8920dc1c822204ada172e792a0d549';
const spaceID = '0s9519swmi94';
const entryUser = 'user';

const client = contentful.createClient({
    accessToken,
});

export default {
    updateInfo({commit}, infoObj) {
        commit(types.UPDATE_INFO, infoObj);
    },
    submitUserInfo({state}) {
        client.getSpace(spaceID)
        .then(space => {
            space.createEntry(entryUser, {
                fields: {
                    name: {
                        'en-US': state.basicInfo.name,
                    },
                    sex: {
                        'en-US': state.basicInfo.sex,
                    },
                    birthday: {
                        'en-US': state.basicInfo.birthday,
                    },
                    nativePlace: {
                        'en-US': state.basicInfo.nativePlace,
                    },
                    mail: {
                        'en-US': state.basicInfo.mail,
                    },
                    phone: {
                        'en-US': state.basicInfo.phone,
                    },
                    applyFor: {
                        'en-US': state.basicInfo.applyFor,
                    },
                    salary: {
                        'en-US': state.basicInfo.salary,
                    },
                    arrive: {
                        'en-US': state.basicInfo.arrive,
                    },
                },
            })
            .then(e => console.log(e));
        });
    },
};
