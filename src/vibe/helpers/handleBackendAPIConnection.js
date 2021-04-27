export const getData = (data) => {
    const baseURL = 'http://panoramamed/API_KQI_PI';
    let {startDate, endDate, kqis, type, ...rest}  = data;
    let [mod, typ] = type.split('-');
    let region = rest.region ? rest.region : null;
    let msisdn = rest.msisdn ? rest.msisdn : null;
    let regionLevel = rest.regionLevel ? rest.regionLevel : null;
    let url = baseURL;

    switch (mod){
        case 'daily':
            if (!endDate){
                let thisDay = new Date();
                thisDay.setDate(thisDay.getDate() - 1);
                endDate = thisDay.toISOString().split("T")[0];
            }            break;
        case 'monthly':
            if (!endDate){
                let thisMonth = new Date();
                thisMonth.setMonth(thisMonth.getMonth() - 1);
                endDate = thisMonth.toISOString().split("T")[0].slice(0, 7);
            }
            break;
        default:
            endDate = 'unknown value';
            break;
    }

    let body = {
        DateStart: startDate,
        DateEnd: endDate,
        SelectedFields: kqis.join(','),
    }

    switch (typ){
        case 'region':
            url += `/${regionLevel}/${mod}`;
            Object.assign(body, {Region: region});
            break;
        case 'MSISDN':
            url += `/userp/${mod}`;
            Object.assign(body, {Msisdn: msisdn});
            break;
        case 'network':
            //TODO: change this to POST too
            return fetch(`http://panoramamed/API_KQI_PI/network/${mod}?dateStart=${startDate}&dateEnd=${endDate}&selectedFields=${kqis.join(',')}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        default:
            break;
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