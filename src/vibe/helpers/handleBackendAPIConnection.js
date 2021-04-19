export const getData = (data) => {
    const baseURL = 'http://panoramamed/API_KQI_PI';
    let {startDate, endDate, kqis, type, ...rest}  = data;
    let [mod, typ] = type.split('-');
    switch (mod){
        case 'daily':
            endDate = endDate ? endDate : new Date().toISOString().split("T")[0].slice(0, 10);
            break;
        case 'monthly':
            endDate = endDate ? endDate : new Date().toISOString().split("T")[0].slice(0, 7);
            break;
        default:
            endDate = 'unknown value';
    }
    let region = rest.region ? rest.region : null;
    //let msisdn = rest.msisdn ? `&msisdn=${rest.msisdn}` : '';
    let msisdn = rest.msisdn ? rest.msisdn : null;

    let body = {
        DateStart: startDate,
        DateEnd: endDate,
        SelectedFields: kqis.join(','),
        Region: region,
    }

    //TODO: deal with the url and API endpoints
    return fetch(`http://panoramamed/API_KQI_PI/regionL2p/${mod}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...body}),
    })
        .then(response => response.json())
        .catch(err => console.log(err));

    /*return fetch(`${baseURL}/${typ}/${mod}?dateStart=${startDate}&dateEnd=${endDate}&selectedFields=${kqis.join(',')}${region}${msisdn}`)
        .then(response => response.json())
        .catch(err => console.log(err));*/
}