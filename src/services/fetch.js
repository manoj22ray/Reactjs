import 'isomorphic-fetch';

export function fetch() {
    return global.fetch('./../data.json')
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            return response;
        });
}
