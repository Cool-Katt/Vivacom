import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated'

const animate = makeAnimated();
const level3options = [
    {group: 'regionL3p', value: 'Burgas_rest', label: 'Burgas_rest'},
    {group: 'regionL3p', value: 'gr. Aheloy', label: 'gr. Aheloy'},
    {group: 'regionL3p', value: 'gr. Ahtopol', label: 'gr. Ahtopol'},
    {group: 'regionL3p', value: 'gr. Burgas', label: 'gr. Burgas'},
    {group: 'regionL3p', value: 'gr. Aytos', label: 'gr. Aytos'},
    {group: 'regionL3p', value: 'gr. Kameno', label: 'gr. Kameno'},
    {group: 'regionL3p', value: 'gr. Karnobat', label: 'gr. Karnobat'},
    {group: 'regionL3p', value: 'gr. Kiten', label: 'gr. Kiten'},
    {group: 'regionL3p', value: 'gr. Malko Tarnovo', label: 'gr. Malko Tarnovo'},
    {group: 'regionL3p', value: 'gr. Nesebar', label: 'gr. Nesebar'},
    {group: 'regionL3p', value: 'gr. Obzor', label: 'gr. Obzor'},
    {group: 'regionL3p', value: 'gr. Primorsko', label: 'gr. Primorsko'},
    {group: 'regionL3p', value: 'gr. Sozopol', label: 'gr. Sozopol'},
    {group: 'regionL3p', value: 'gr. Sredets', label: 'gr. Sredets'},
    {group: 'regionL3p', value: 'gr. Sungurlare', label: 'gr. Sungurlare'},
    {group: 'regionL3p', value: 'gr. Sveti Vlas', label: 'gr. Sveti Vlas'},
    {group: 'regionL3p', value: 'gr. Tsarevo', label: 'gr. Tsarevo'},
    {group: 'regionL3p', value: 'gr. Asenovgrad', label: 'gr. Asenovgrad'},
    {group: 'regionL3p', value: 'gr. Banya', label: 'gr. Banya'},
    {group: 'regionL3p', value: 'gr. Brezovo', label: 'gr. Brezovo'},
    {group: 'regionL3p', value: 'gr. Hisarya', label: 'gr. Hisarya'},
    {group: 'regionL3p', value: 'gr. Kalofer', label: 'gr. Kalofer'},
    {group: 'regionL3p', value: 'gr. Karlovo', label: 'gr. Karlovo'},
    {group: 'regionL3p', value: 'gr. Klisura', label: 'gr. Klisura'},
    {group: 'regionL3p', value: 'gr. Krichim', label: 'gr. Krichim'},
    {group: 'regionL3p', value: 'gr. Kuklen', label: 'gr. Kuklen'},
    {group: 'regionL3p', value: 'gr. Parvomay', label: 'gr. Parvomay'},
    {group: 'regionL3p', value: 'gr. Perushtitsa', label: 'gr. Perushtitsa'},
    {group: 'regionL3p', value: 'gr. Plovdiv', label: 'gr. Plovdiv'},
    {group: 'regionL3p', value: 'gr. Rakovski', label: 'gr. Rakovski'},
    {group: 'regionL3p', value: 'gr. Sadovo', label: 'gr. Sadovo'},
    {group: 'regionL3p', value: 'gr. Saedinenie', label: 'gr. Saedinenie'},
    {group: 'regionL3p', value: 'gr. Sopot', label: 'gr. Sopot'},
    {group: 'regionL3p', value: 'gr. Stamboliyski', label: 'gr. Stamboliyski'},
    {group: 'regionL3p', value: 'Plovdiv_rest', label: 'Plovdiv_rest'},
    {group: 'regionL3p', value: 'Borovets Resort', label: 'Borovets Resort'},
    {group: 'regionL3p', value: 'gr. Botevgrad', label: 'gr. Botevgrad'},
    {group: 'regionL3p', value: 'gr. Bozhurishte', label: 'gr. Bozhurishte'},
    {group: 'regionL3p', value: 'gr. Dolna banya', label: 'gr. Dolna banya'},
    {group: 'regionL3p', value: 'gr. Dragoman', label: 'gr. Dragoman'},
    {group: 'regionL3p', value: 'gr. Elin Pelin', label: 'gr. Elin Pelin'},
    {group: 'regionL3p', value: 'gr. Etropole', label: 'gr. Etropole'},
    {group: 'regionL3p', value: 'gr. Ihtiman', label: 'gr. Ihtiman'},
    {group: 'regionL3p', value: 'gr. Kostenets', label: 'gr. Kostenets'},
    {group: 'regionL3p', value: 'gr. Kostinbrod', label: 'gr. Kostinbrod'},
    {group: 'regionL3p', value: 'gr. Pirdop', label: 'gr. Pirdop'},
    {group: 'regionL3p', value: 'gr. Pravets', label: 'gr. Pravets'},
    {group: 'regionL3p', value: 'gr. Varna', label: 'gr. Varna'},
    {group: 'regionL3p', value: 'Varna North Resort', label: 'Varna North Resort'},
    {group: 'regionL3p', value: 'Varna South Resort', label: 'Varna South Resort'},
    {group: 'regionL3p', value: 'Varna_rest', label: 'Varna_rest'},
    {group: 'regionL3p', value: 'gr. Panagyurishte', label: 'gr. Panagyurishte'},
    {group: 'regionL3p', value: 'gr. Pazardzhik', label: 'gr. Pazardzhik'},
    {group: 'regionL3p', value: 'gr. Peshtera', label: 'gr. Peshtera'},
    {group: 'regionL3p', value: 'gr. Rakitovo', label: 'gr. Rakitovo'},
    {group: 'regionL3p', value: 'gr. Sarnitsa', label: 'gr. Sarnitsa'},
    {group: 'regionL3p', value: 'gr. Septemvri', label: 'gr. Septemvri'},
    {group: 'regionL3p', value: 'gr. Strelcha', label: 'gr. Strelcha'},
    {group: 'regionL3p', value: 'gr. Velingrad', label: 'gr. Velingrad'},
    {group: 'regionL3p', value: 'gr. Vetren', label: 'gr. Vetren'},
    {group: 'regionL3p', value: 'Pazardzhik_rest', label: 'Pazardzhik_rest'},
    {group: 'regionL3p', value: 'gr. Dimitrovgrad', label: 'gr. Dimitrovgrad'},
    {group: 'regionL3p', value: 'gr. Harmanli', label: 'gr. Harmanli'},
    {group: 'regionL3p', value: 'gr. Haskovo', label: 'gr. Haskovo'},
    {group: 'regionL3p', value: 'gr. Lyubimets', label: 'gr. Lyubimets'},
    {group: 'regionL3p', value: 'gr. Merichleri', label: 'gr. Merichleri'},
    {group: 'regionL3p', value: 'gr. Simeonovgrad', label: 'gr. Simeonovgrad'},
    {group: 'regionL3p', value: 'gr. Svilengrad', label: 'gr. Svilengrad'},
    {group: 'regionL3p', value: 'Haskovo_rest', label: 'Haskovo_rest'},
    {group: 'regionL3p', value: 'gr. Berkovitsa', label: 'gr. Berkovitsa'},
    {group: 'regionL3p', value: 'gr. Boychinovtsi', label: 'gr. Boychinovtsi'},
    {group: 'regionL3p', value: 'gr. Brusartsi', label: 'gr. Brusartsi'},
    {group: 'regionL3p', value: 'gr. Lom', label: 'gr. Lom'},
    {group: 'regionL3p', value: 'gr. Montana', label: 'gr. Montana'},
    {group: 'regionL3p', value: 'gr. Varshets', label: 'gr. Varshets'},
    {group: 'regionL3p', value: 'Montana_rest', label: 'Montana_rest'},
    {group: 'regionL3p', value: 'gr. Letnitsa', label: 'gr. Letnitsa'},
    {group: 'regionL3p', value: 'gr. Lovech', label: 'gr. Lovech'},
    {group: 'regionL3p', value: 'gr. Lukovit', label: 'gr. Lukovit'},
    {group: 'regionL3p', value: 'gr. Teteven', label: 'gr. Teteven'},
    {group: 'regionL3p', value: 'gr. Troyan', label: 'gr. Troyan'},
    {group: 'regionL3p', value: 'gr. Yablanitsa', label: 'gr. Yablanitsa'},
    {group: 'regionL3p', value: 'Lovech_rest', label: 'Lovech_rest'},
    {group: 'regionL3p', value: 'gr. Chirpan', label: 'gr. Chirpan'},
    {group: 'regionL3p', value: 'gr. Gurkovo', label: 'gr. Gurkovo'},
    {group: 'regionL3p', value: 'gr. Kazanlak', label: 'gr. Kazanlak'},
    {group: 'regionL3p', value: 'gr. Maglizh', label: 'gr. Maglizh'},
    {group: 'regionL3p', value: 'gr. Radnevo', label: 'gr. Radnevo'},
    {group: 'regionL3p', value: 'gr. Stara Zagora', label: 'gr. Stara Zagora'},
    {group: 'regionL3p', value: 'Stara Zagora_rest', label: 'Stara Zagora_rest'},
    {group: 'regionL3p', value: 'gr. Chepelare', label: 'gr. Chepelare'},
    {group: 'regionL3p', value: 'gr. Devin', label: 'gr. Devin'},
    {group: 'regionL3p', value: 'gr. Rudozem', label: 'gr. Rudozem'},
    {group: 'regionL3p', value: 'gr. Smolyan', label: 'gr. Smolyan'},
    {group: 'regionL3p', value: 'Pamporovo Resort', label: 'Pamporovo Resort'},
    {group: 'regionL3p', value: 'Dobrich_rest', label: 'Dobrich_rest'},
    {group: 'regionL3p', value: 'gr. Balchik', label: 'gr. Balchik'},
    {group: 'regionL3p', value: 'gr. Dobrich', label: 'gr. Dobrich'},
    {group: 'regionL3p', value: 'gr. General Toshevo', label: 'gr. General Toshevo'},
    {group: 'regionL3p', value: 'gr. Shabla', label: 'gr. Shabla'},
    {group: 'regionL3p', value: 'gr. Batanovtsi', label: 'gr. Batanovtsi'},
    {group: 'regionL3p', value: 'gr. Pernik', label: 'gr. Pernik'},
    {group: 'regionL3p', value: 'gr. Radomir', label: 'gr. Radomir'},
    {group: 'regionL3p', value: 'gr. Tran', label: 'gr. Tran'},
    {group: 'regionL3p', value: 'Pernik_rest', label: 'Pernik_rest'},
    {group: 'regionL3p', value: 'gr. Kaspichan', label: 'gr. Kaspichan'},
    {group: 'regionL3p', value: 'gr. Novi pazar', label: 'gr. Novi pazar'},
    {group: 'regionL3p', value: 'gr. Shumen', label: 'gr. Shumen'},
    {group: 'regionL3p', value: 'gr. Smyadovo', label: 'gr. Smyadovo'},
    {group: 'regionL3p', value: 'Shumen_rest', label: 'Shumen_rest'},
    {group: 'regionL3p', value: 'gr. Bolyarovo', label: 'gr. Bolyarovo'},
    {group: 'regionL3p', value: 'gr. Elhovo', label: 'gr. Elhovo'},
    {group: 'regionL3p', value: 'gr. Straldzha', label: 'gr. Straldzha'},
    {group: 'regionL3p', value: 'gr. Yambol', label: 'gr. Yambol'},
    {group: 'regionL3p', value: 'Yambol_rest', label: 'Yambol_rest'},
    {group: 'regionL3p', value: 'gr. Antonovo', label: 'gr. Antonovo'},
    {group: 'regionL3p', value: 'gr. Omurtag', label: 'gr. Omurtag'},
    {group: 'regionL3p', value: 'gr. Popovo', label: 'gr. Popovo'},
    {group: 'regionL3p', value: 'gr. Targovishte', label: 'gr. Targovishte'},
    {group: 'regionL3p', value: 'Targovishte_rest', label: 'Targovishte_rest'},
    {group: 'regionL3p', value: 'gr. Nova Zagora', label: 'gr. Nova Zagora'},
    {group: 'regionL3p', value: 'gr. Shivachevo', label: 'gr. Shivachevo'},
    {group: 'regionL3p', value: 'gr. Sliven', label: 'gr. Sliven'},
    {group: 'regionL3p', value: 'gr. Tvarditsa', label: 'gr. Tvarditsa'},
    {group: 'regionL3p', value: 'Sliven_rest', label: 'Sliven_rest'},
    {group: 'regionL3p', value: 'Sofia', label: 'Sofia'},
    {group: 'regionL3p', value: 'Burgas North Resort', label: 'Burgas North Resort'},
    {group: 'regionL3p', value: 'Burgas South Resort', label: 'Burgas South Resort'},
    {group: 'regionL3p', value: 'gr. Samokov', label: 'gr. Samokov'},
    {group: 'regionL3p', value: 'gr. Slivnitsa', label: 'gr. Slivnitsa'},
    {group: 'regionL3p', value: 'gr. Svoge', label: 'gr. Svoge'},
    {group: 'regionL3p', value: 'gr. Zlatitsa', label: 'gr. Zlatitsa'},
    {group: 'regionL3p', value: 'Sofia Region_rest', label: 'Sofia Region_rest'},
    {group: 'regionL3p', value: 'gr. Belene', label: 'gr. Belene'},
    {group: 'regionL3p', value: 'gr. Cherven bryag', label: 'gr. Cherven bryag'},
    {group: 'regionL3p', value: 'gr. Dolna Mitropolia', label: 'gr. Dolna Mitropolia'},
    {group: 'regionL3p', value: 'gr. Dolni Dabnik', label: 'gr. Dolni Dabnik'},
    {group: 'regionL3p', value: 'gr. Gulyantsi', label: 'gr. Gulyantsi'},
    {group: 'regionL3p', value: 'gr. Knezha', label: 'gr. Knezha'},
    {group: 'regionL3p', value: 'gr. Koynare', label: 'gr. Koynare'},
    {group: 'regionL3p', value: 'gr. Levski', label: 'gr. Levski'},
    {group: 'regionL3p', value: 'gr. Pleven', label: 'gr. Pleven'},
    {group: 'regionL3p', value: 'gr. Pordim', label: 'gr. Pordim'},
    {group: 'regionL3p', value: 'gr. Slavyanovo', label: 'gr. Slavyanovo'},
    {group: 'regionL3p', value: 'gr. Trastenik', label: 'gr. Trastenik'},
    {group: 'regionL3p', value: 'Pleven_rest', label: 'Pleven_rest'},
    {group: 'regionL3p', value: 'gr. Byala cherkva', label: 'gr. Byala cherkva'},
    {group: 'regionL3p', value: 'gr. Dolna Oryahovitsa', label: 'gr. Dolna Oryahovitsa'},
    {group: 'regionL3p', value: 'gr. Gorna Oryahovitsa', label: 'gr. Gorna Oryahovitsa'},
    {group: 'regionL3p', value: 'gr. Lyaskovets', label: 'gr. Lyaskovets'},
    {group: 'regionL3p', value: 'gr. Pavlikeni', label: 'gr. Pavlikeni'},
    {group: 'regionL3p', value: 'gr. Polski Trambesh', label: 'gr. Polski Trambesh'},
    {group: 'regionL3p', value: 'gr. Strazhitsa', label: 'gr. Strazhitsa'},
    {group: 'regionL3p', value: 'gr. Suhindol', label: 'gr. Suhindol'},
    {group: 'regionL3p', value: 'gr. Svishtov', label: 'gr. Svishtov'},
    {group: 'regionL3p', value: 'gr. Veliko Tarnovo', label: 'gr. Veliko Tarnovo'},
    {group: 'regionL3p', value: 'gr. Zlataritsa', label: 'gr. Zlataritsa'},
    {group: 'regionL3p', value: 'Veliko Tarnovo_rest', label: 'Veliko Tarnovo_rest'},
    {group: 'regionL3p', value: 'Bansko Resort', label: 'Bansko Resort'},
    {group: 'regionL3p', value: 'Blagoevgrad_rest', label: 'Blagoevgrad_rest'},
    {group: 'regionL3p', value: 'gr. Bansko', label: 'gr. Bansko'},
    {group: 'regionL3p', value: 'gr. Belitsa', label: 'gr. Belitsa'},
    {group: 'regionL3p', value: 'gr. Blagoevgrad', label: 'gr. Blagoevgrad'},
    {group: 'regionL3p', value: 'gr. Gotse Delchev', label: 'gr. Gotse Delchev'},
    {group: 'regionL3p', value: 'gr. Petrich', label: 'gr. Petrich'},
    {group: 'regionL3p', value: 'gr. Razlog', label: 'gr. Razlog'},
    {group: 'regionL3p', value: 'gr. Sandanski', label: 'gr. Sandanski'},
    {group: 'regionL3p', value: 'gr. Simitli', label: 'gr. Simitli'},
    {group: 'regionL3p', value: 'gr. Yakoruda', label: 'gr. Yakoruda'},
    {group: 'regionL3p', value: 'gr. Aksakovo', label: 'gr. Aksakovo'},
    {group: 'regionL3p', value: 'gr. Dalgopol', label: 'gr. Dalgopol'},
    {group: 'regionL3p', value: 'gr. Devnya', label: 'gr. Devnya'},
    {group: 'regionL3p', value: 'gr. Dolni chiflik', label: 'gr. Dolni chiflik'},
    {group: 'regionL3p', value: 'gr. Provadia', label: 'gr. Provadia'},
    {group: 'regionL3p', value: 'gr. Suvorovo', label: 'gr. Suvorovo'},
    {group: 'regionL3p', value: 'gr. Valchi dol', label: 'gr. Valchi dol'},
    {group: 'regionL3p', value: 'Smolyan_rest', label: 'Smolyan_rest'},
    {group: 'regionL3p', value: 'gr. Ardino', label: 'gr. Ardino'},
    {group: 'regionL3p', value: 'gr. Dzhebel', label: 'gr. Dzhebel'},
    {group: 'regionL3p', value: 'gr. Kardzhali', label: 'gr. Kardzhali'},
    {group: 'regionL3p', value: 'gr. Krumovgrad', label: 'gr. Krumovgrad'},
    {group: 'regionL3p', value: 'gr. Momchilgrad', label: 'gr. Momchilgrad'},
    {group: 'regionL3p', value: 'Kardzhali_rest', label: 'Kardzhali_rest'},
    {group: 'regionL3p', value: 'gr. Bobov dol', label: 'gr. Bobov dol'},
    {group: 'regionL3p', value: 'gr. Dupnitsa', label: 'gr. Dupnitsa'},
    {group: 'regionL3p', value: 'gr. Kocherinovo', label: 'gr. Kocherinovo'},
    {group: 'regionL3p', value: 'gr. Kyustendil', label: 'gr. Kyustendil'},
    {group: 'regionL3p', value: 'gr. Sapareva banya', label: 'gr. Sapareva banya'},
    {group: 'regionL3p', value: 'Kyustendil_rest', label: 'Kyustendil_rest'},
    {group: 'regionL3p', value: 'gr. Byala Slatina', label: 'gr. Byala Slatina'},
    {group: 'regionL3p', value: 'gr. Kozloduy', label: 'gr. Kozloduy'},
    {group: 'regionL3p', value: 'gr. Oryahovo', label: 'gr. Oryahovo'},
    {group: 'regionL3p', value: 'gr. Roman', label: 'gr. Roman'},
    {group: 'regionL3p', value: 'gr. Vratsa', label: 'gr. Vratsa'},
    {group: 'regionL3p', value: 'Vratsa_rest', label: 'Vratsa_rest'},
    {group: 'regionL3p', value: 'gr. Belogradchik', label: 'gr. Belogradchik'},
    {group: 'regionL3p', value: 'gr. Bregovo', label: 'gr. Bregovo'},
    {group: 'regionL3p', value: 'gr. Dunavtsi', label: 'gr. Dunavtsi'},
    {group: 'regionL3p', value: 'gr. Kula', label: 'gr. Kula'},
    {group: 'regionL3p', value: 'gr. Vidin', label: 'gr. Vidin'},
    {group: 'regionL3p', value: 'Vidin_rest', label: 'Vidin_rest'},
    {group: 'regionL3p', value: 'Gabrovo_rest', label: 'Gabrovo_rest'},
    {group: 'regionL3p', value: 'gr. Dryanovo', label: 'gr. Dryanovo'},
    {group: 'regionL3p', value: 'gr. Gabrovo', label: 'gr. Gabrovo'},
    {group: 'regionL3p', value: 'gr. Plachkovtsi', label: 'gr. Plachkovtsi'},
    {group: 'regionL3p', value: 'gr. Sevlievo', label: 'gr. Sevlievo'},
    {group: 'regionL3p', value: 'gr. Tryavna', label: 'gr. Tryavna'},
    {group: 'regionL3p', value: 'gr. Isperih', label: 'gr. Isperih'},
    {group: 'regionL3p', value: 'gr. Kubrat', label: 'gr. Kubrat'},
    {group: 'regionL3p', value: 'gr. Loznitsa', label: 'gr. Loznitsa'},
    {group: 'regionL3p', value: 'gr. Razgrad', label: 'gr. Razgrad'},
    {group: 'regionL3p', value: 'gr. Zavet', label: 'gr. Zavet'},
    {group: 'regionL3p', value: 'Razgrad_rest', label: 'Razgrad_rest'},
    {group: 'regionL3p', value: 'gr. Borovo', label: 'gr. Borovo'},
    {group: 'regionL3p', value: 'gr. Byala', label: 'gr. Byala'},
    {group: 'regionL3p', value: 'gr. Glodzhevo', label: 'gr. Glodzhevo'},
    {group: 'regionL3p', value: 'gr. Marten', label: 'gr. Marten'},
    {group: 'regionL3p', value: 'gr. Ruse', label: 'gr. Ruse'},
    {group: 'regionL3p', value: 'Ruse_rest', label: 'Ruse_rest'},
    {group: 'regionL3p', value: 'gr. Dulovo', label: 'gr. Dulovo'},
    {group: 'regionL3p', value: 'gr. Glavinitsa', label: 'gr. Glavinitsa'},
    {group: 'regionL3p', value: 'gr. Silistra', label: 'gr. Silistra'},
    {group: 'regionL3p', value: 'gr. Tutrakan', label: 'gr. Tutrakan'},
    {group: 'regionL3p', value: 'Silistra_rest', label: 'Silistra_rest'},

];
const level2options = [
    {group: 'regionL2p', value: 'Burgas_Region', label: 'Burgas_Region'},
    {group: 'regionL2p', value: 'Plovdiv_Region', label: 'Plovdiv_Region'},
    {group: 'regionL2p', value: 'Sofia Region', label: 'Sofia Region'},
    {group: 'regionL2p', value: 'Pleven_Region', label: 'Pleven_Region'},
    {group: 'regionL2p', value: 'Veliko Tarnovo_Region', label: 'Veliko Tarnovo_Region'},
    {group: 'regionL2p', value: 'Blagoevgrad_Region', label: 'Blagoevgrad_Region'},
    {group: 'regionL2p', value: 'Varna_Region', label: 'Varna_Region'},
    {group: 'regionL2p', value: 'Pazardzhik_Region', label: 'Pazardzhik_Region'},
    {group: 'regionL2p', value: 'Haskovo_Region', label: 'Haskovo_Region'},
    {group: 'regionL2p', value: 'Montana_Region', label: 'Montana_Region'},
    {group: 'regionL2p', value: 'Lovech_Region', label: 'Lovech_Region'},
    {group: 'regionL2p', value: 'Stara Zagora_Region', label: 'Stara Zagora_Region'},
    {group: 'regionL2p', value: 'Smolyan_Region', label: 'Smolyan_Region'},
    {group: 'regionL2p', value: 'Kardzhali_Region', label: 'Kardzhali_Region'},
    {group: 'regionL2p', value: 'Kyustendil_Region', label: 'Kyustendil_Region'},
    {group: 'regionL2p', value: 'Vratsa_Region', label: 'Vratsa_Region'},
    {group: 'regionL2p', value: 'Vidin_Region', label: 'Vidin_Region'},
    {group: 'regionL2p', value: 'Gabrovo_Region', label: 'Gabrovo_Region'},
    {group: 'regionL2p', value: 'Razgrad_Region', label: 'Razgrad_Region'},
    {group: 'regionL2p', value: 'Ruse_Region', label: 'Ruse_Region'},
    {group: 'regionL2p', value: 'Silistra_Region', label: 'Silistra_Region'},
    {group: 'regionL2p', value: 'Dobrich_Region', label: 'Dobrich_Region'},
    {group: 'regionL2p', value: 'Pernik_Region', label: 'Pernik_Region'},
    {group: 'regionL2p', value: 'Shumen_Region', label: 'Shumen_Region'},
    {group: 'regionL2p', value: 'Yambol_Region', label: 'Yambol_Region'},
    {group: 'regionL2p', value: 'Targovishte_Region', label: 'Targovishte_Region'},
    {group: 'regionL2p', value: 'Sliven_Region', label: 'Sliven_Region'},
    {group: 'regionL2p', value: 'Sofia', label: 'Sofia'},
];

let opsAfterMarch = [];
let newOptions = [
    {
        label: 'Level 2',
        options: level2options,
    },
    {
        label: 'Level 3',
        options: level3options,
    },
];

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const getRegions = () => {
    let ops = [];
    let lowerCaseOps = [];
    let level2 = [];
    let level3 = [];
    fetch('http://panoramamed/API_KQI_PI/regions_name/daily')
        .then(res => res.json())
        .then(o => ops = JSON.parse(o))
        .then(() => {
            lowerCaseOps = ops.map((item) => {
                let mapped = {};
                for (const itemKey in item) {
                    mapped[itemKey.toLowerCase()] = item[itemKey];
                }
                return mapped;
            })
        })
        .then(() => {
            lowerCaseOps.forEach(op => {
                if (op.group === 'regionL2p') {
                    level2.push(op);
                } else if (op.group === 'regionL3p') {
                    level3.push(op)
                }
            })
        })
        .then(() => {
            level3.sort((a, b) => (a.value > b.value) ? 1 : -1)
            opsAfterMarch = [
                {
                    label: 'Level 2',
                    options: level2,
                },
                {
                    label: 'Level 3',
                    options: level3,
                },
            ]
        })
}

const filterOptions = (inputValue) => {
    let found = [{ label: 'Matches', options: []}];
    opsAfterMarch.forEach(o =>
        Object.assign(found[0].options, o.options.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase()))));
    return found;
};

const loadOptions = (inputValue, callback) => {
    callback(filterOptions(inputValue))
}

export default function SelectRegionComponent({prevQuery, startDate}) {
    getRegions();
    if (startDate && typeof startDate === 'string') {
        if(Date.parse(startDate) >= new Date('2021-03-12'))
        {
            return (<AsyncSelect
                //isMulti={true}
                components={animate}
                name="region"
                closeMenuOnSelect={true}
                isSearchable={true}
                isClearable={true}
                className="selectRegion"
                classNamePrefix="select"
                placeholder="Click here to select something"
                formatGroupLabel={formatGroupLabel}
                required={true}
                getOptionValue={op => `${op.value}:${op.group}`}
                cacheOptiopns
                defaultOptions={opsAfterMarch}
                loadOptions={loadOptions}
            />)
        }
    }

    return (<Select
        //isMulti={true}
        components={animate}
        name="region"
        closeMenuOnSelect={true}
        isSearchable={true}
        isClearable={true}
        options={newOptions}
        className="selectRegion"
        classNamePrefix="select"
        placeholder="Click here to select something"
        defaultValue={(prevQuery?.region && isNaN(prevQuery?.region)) ? {group: prevQuery.regionLevel, value: prevQuery.region, label: prevQuery.region} : null}
        formatGroupLabel={formatGroupLabel}
        required={true}
        getOptionValue={op => `${op.value}:${op.group}`}
    />)
}