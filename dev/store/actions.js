import types from './mutation-types';

import contentful from 'contentful-management';

const accessToken = '31091dca9128fe769d67d8ea32d03f991a8920dc1c822204ada172e792a0d549';
const spaceID = '0s9519swmi94';
const entryUser = 'user';

const basicInfoPorps = [
    'name',
    'sex',
    'birthday',
    'nativePlace',
    'mail',
    'phone',
    'applyFor',
    'salary',
    'arrive',
];
const eduInfoProps = [
    'educateFrom',
    'educateTo',
    'school',
    'major',
    'diploma',
    'english',
];
const workInfoProps = [
    'workFrom',
    'workTo',
    'company',
    'position',
    'positionDescription',
    'treatment',
    'leaveReason',
];
const fields = {};

const client = contentful.createClient({
    accessToken,
});

export default {
    updateBasicInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'basicInfo',
            info,
        });
    },
    updateEduInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'eduInfo',
            info,
        });
    },
    updateWorkInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'workInfo',
            info,
        });
    },
    submitUserInfo({state}) {
        for (const prop of basicInfoPorps) {
            fields[prop] = {
                'en-US': state.basicInfo[prop],
            };
        }

        for (const prop of eduInfoProps) {
            fields[prop] = {
                'en-US': state.eduInfo[prop],
            };
        }

        for (const prop of workInfoProps) {
            fields[prop] = {
                'en-US': state.workInfo[prop],
            };
        }

        console.log('==========', fields);

        client.getSpace(spaceID)
        .then(space => {
            space.createEntry(entryUser, {
                fields,
            })
            .then(e => console.log(e));
        });
    },
};
