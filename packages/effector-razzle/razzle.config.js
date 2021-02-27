const path = require('path');

module.exports = {
    plugins: [
        {
            name: 'typescript',
            options: {
                useBabel: true,
                forkTsChecker: {
                    tslint: false,
                },
            },
        },
    ],
};
