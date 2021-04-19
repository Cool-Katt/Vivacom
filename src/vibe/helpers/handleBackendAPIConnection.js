export const getData = (data) => {
    const baseURL = 'http://panoramamed/API_KQI_PI';
    let {startDate, endDate, kqis, type, ...rest}  = data;
    let [mod, typ] = type.split('-');
    let region = rest.region ? rest.region : null;
    let msisdn = rest.msisdn ? rest.msisdn : null;
    let url = baseURL;

    switch (mod){
        case 'daily':
            endDate = endDate ? endDate : new Date().toISOString().split("T")[0].slice(0, 10);
            break;
        case 'monthly':
            if (!endDate){
                let thisMonth = new Date();
                thisMonth.setMonth(thisMonth.getMonth() - 1);
                endDate = thisMonth.toISOString().split("T")[0].slice(0, 7);
            }
            break;
        default:
            endDate = 'unknown value';
    }

    let body = {
        DateStart: startDate,
        DateEnd: endDate,
        SelectedFields: kqis.join(','),
    }

    switch (typ){
        case 'region':
            //TODO: Consolidate region endpoints
            url += `/regionL2p/${mod}`;
            Object.assign(body, {Region: region});
            break;
        case 'MSISDN':
            url += `/userp/${mod}`;
            Object.assign(body, {Msisdn: msisdn});
            break;
        default:
            break;
    }


    if (typ === 'network'){
        return fetch(`${baseURL}/${typ}/${mod}?dateStart=${startDate}&dateEnd=${endDate}&selectedFields=${kqis.join(',')}`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    //TODO: deal with the url and API endpoints
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...body}),
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}