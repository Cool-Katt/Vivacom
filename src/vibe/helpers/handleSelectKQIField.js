import React, {Component} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';

//REMOVE THIS
/*const level1options = [
    {value: 'CS', label: 'CS'},
    {value: 'PS', label: 'PS'},
]
const level2options = [
    {value: 'Voice', label: 'Voice'},
    {value: 'SMS', label: 'SMS'},
    {value: 'WEB', label: 'WEB'},
    {value: 'Video_Streaming', label: 'Video_Streaming'},
    {value: 'IM', label: 'IM'},
    {value: 'File_Transfer', label: 'File_Transfer'},
]
const level3options = [
    {value: 'SMS_Delay_ms', label: 'SMS_Delay_ms'},
    {value: 'SMS_Service_Availability', label: 'SMS_Service_Availability'},
    {value: 'Call_Setup_Success_Rate', label: 'Call_Setup_Success_Rate'},
    {value: 'Call_Completion_Failure_Rate', label: 'Call_Completion_Failure_Rate'},
    {value: 'Call_Setup_Time', label: 'Call_Setup_Time'},
    {value: 'WEB_Browsing_Integrity', label: 'WEB_Browsing_Integrity'},
    {value: 'WEB_Browsing_Retainability', label: 'WEB_Browsing_Retainability'},
    {value: 'Video_Streaming_Integrity', label: 'Video_Streaming_Integrity'},
    {value: 'Video_Streaming_Retainability', label: 'Video_Streaming_Retainability'},
    {value: 'IM_Integrity', label: 'IM_Integrity'},
    {value: 'IM_Retainability', label: 'IM_Retainability'},
    {value: 'File_Sharing_Integrity', label: 'File_Sharing_Integrity'},
    {value: 'File_Sharing_Retainability', label: 'File_Sharing_Retainability'},
    {value: 'Multimedia_Integrity', label: 'Multimedia_Integrity'},
]
const level4options = [
    {value: 'SMS_Origination_Delay_ms', label: 'SMS_Origination_Delay_ms'},
    {value: 'SMS_Termination_Delay_ms', label: 'SMS_Termination_Delay_ms'},
    {value: 'SMS_Termination_Rate', label: 'SMS_Termination_Rate'},
    {value: 'SMS_Origination_Success_Rate', label: 'SMS_Origination_Success_Rate'},
    {value: 'Perceived_Call_Success_Rate', label: 'Perceived_Call_Success_Rate'},
    {value: 'VoLTE_MO_Network_Connection_Rate', label: 'VoLTE_MO_Network_Connection_Rate'},
    {value: 'VoWiFi_MO_Connection_Rate', label: 'VoWiFi_MO_Connection_Rate'},
    {value: 'Perceived_Call_Drop_Rate', label: 'Perceived_Call_Drop_Rate'},
    {value: 'VoLTE_Call_Drop_Rate', label: 'VoLTE_Call_Drop_Rate'},
    {value: 'VoWiFi_MO_Call_Drop_Rate', label: 'VoWiFi_MO_Call_Drop_Rate'},
    {value: 'E2E_Call_Connection_Delay_ms', label: 'E2E_Call_Connection_Delay_ms'},
    {value: 'V2V_MO_Connection_Delay', label: 'V2V_MO_Connection_Delay'},
    {value: 'VoWiFi_MO_Connection_Delay_ms', label: 'VoWiFi_MO_Connection_Delay_ms'},
    {value: 'VoLTE_to_VoLTE_Voice_MOS', label: 'VoLTE_to_VoLTE_Voice_MOS'},
    {value: 'Page_UL_TCP_Retransmission_Rate', label: 'Page_UL_TCP_Retransmission_Rate'},
    {value: 'Page_DL_TCP_Retransmission_Rate', label: 'Page_DL_TCP_Retransmission_Rate'},
    {value: 'Page_Server_Side_RTT', label: 'Page_Server_Side_RTT'},
    {value: 'Page_Client_Side_RTT', label: 'Page_Client_Side_RTT'},
    {value: 'Page_E2E_Delay', label: 'Page_E2E_Delay'},
    {value: 'Page_Response_Delay_ms', label: 'Page_Response_Delay_ms'},
    {value: 'Page_DL_Throughput_Kbps', label: 'Page_DL_Throughput_Kbps'},
    {value: 'Video_Stream_DL_TCP_Retransmission_Rate', label: 'Video_Stream_DL_TCP_Retransmission_Rate'},
    {value: 'Video_Streaming_xKB_Start_Delay', label: 'Video_Streaming_xKB_Start_Delay'},
    {value: 'Video_Stream_Client_Side_Round_Trip_Time_ms', label: 'Video_Stream_Client_Side_Round_Trip_Time_ms'},
    {value: 'Video_Stream_E2E_Delay', label: 'Video_Stream_E2E_Delay'},
    {value: 'Video_Stream_UL_TCP_Retransmission_Rate', label: 'Video_Stream_UL_TCP_Retransmission_Rate'},
    {value: 'Video_Stream_Server_Side_Round_Trip_Time_ms', label: 'Video_Stream_Server_Side_Round_Trip_Time_ms'},
    {value: 'Video_Streaming_Download_Throughput_Kbps', label: 'Video_Streaming_Download_Throughput_Kbps'},
    {value: 'IM_DL_TCP_Packets_Loss_Rate', label: 'IM_DL_TCP_Packets_Loss_Rate'},
    {value: 'IM_UL_TCP_Packets_Loss_Rate', label: 'IM_UL_TCP_Packets_Loss_Rate'},
    {value: 'IM_Interacting_Delay', label: 'IM_Interacting_Delay'},
    {value: 'IM_Server_Side_Round_Trip_Time_ms', label: 'IM_Server_Side_Round_Trip_Time_ms'},
    {value: 'IM_Client_Side_Round_Trip_Time_ms', label: 'IM_Client_Side_Round_Trip_Time_ms'},
    {
        value: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate',
        label: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate'
    },
    {
        value: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate',
        label: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate'
    },
    {
        value: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate',
        label: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate'
    },
    {
        value: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate',
        label: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate'
    },
    {value: 'File_Sharing_Response_Delay', label: 'File_Sharing_Response_Delay'},
    {value: 'File_Sharing_UL_Throughput_Kbps', label: 'File_Sharing_UL_Throughput_Kbps'},
    {value: 'File_Sharing_DL_Throughput_Kbps', label: 'File_Sharing_DL_Throughput_Kbps'},
    {value: 'Multimedia_Response_Delay', label: 'Multimedia_Response_Delay'},
    {value: 'Multimedia_UL_Throughput_Kbps', label: 'Multimedia_UL_Throughput_Kbps'},
    {value: 'Multimedia_DL_Throughput_Kbps', label: 'Multimedia_DL_Throughput_Kbps'},
]
const newOptions = [
    {
        label: 'Level 1',
        options: level1options,
    },
    {
        label: 'Level 2',
        options: level2options,
    },
    {
        label: 'Level 3',
        options: level3options,
    },
    {
        label: 'Level 4',
        options: level4options,
    },
]*/
/*
const optionGroups = [
    /!*
        {value: 'Voice', label: 'Voice'},
        {value: 'SMS', label: 'SMS'},
        {value: 'WEB', label: 'WEB'},
        {value: 'Video_Streaming', label: 'Video_Streaming'},
        {value: 'IM', label: 'IM'},
        {value: 'File_Transfer', label: 'File_Transfer'},


        {value: 'SMS_Delay_ms', label: 'SMS_Delay_ms'},
        {value: 'SMS_Service_Availability', label: 'SMS_Service_Availability'},
        {value: 'Call_Setup_Success_Rate', label: 'Call_Setup_Success_Rate'},
        {value: 'Call_Completion_Failure_Rate', label: 'Call_Completion_Failure_Rate'},
        {value: 'Call_Setup_Time', label: 'Call_Setup_Time'},
        {value: 'WEB_Browsing_Integrity', label: 'WEB_Browsing_Integrity'},
        {value: 'WEB_Browsing_Retainability', label: 'WEB_Browsing_Retainability'},
        {value: 'Video_Streaming_Integrity', label: 'Video_Streaming_Integrity'},
        {value: 'Video_Streaming_Retainability', label: 'Video_Streaming_Retainability'},
        {value: 'IM_Integrity', label: 'IM_Integrity'},
        {value: 'IM_Retainability', label: 'IM_Retainability'},
        {value: 'File_Sharing_Integrity', label: 'File_Sharing_Integrity'},
        {value: 'File_Sharing_Retainability', label: 'File_Sharing_Retainability'},
        {value: 'Multimedia_Integrity', label: 'Multimedia_Integrity'},

    *!/
    /!*{group: 'SMS', label: 'SMS_Origination_Delay_ms'},
    {group: 'SMS', label: 'SMS_Termination_Delay_ms'},
    {group: 'SMS', label: 'SMS_Termination_Rate'},
    {group: 'SMS', label: 'SMS_Origination_Success_Rate'},*!/
    {group: 'SMS', label: 'SMS_'},
    /!*{group: 'Voice', label: 'Perceived_Call_Success_Rate'},
    {group: 'Voice', label: 'VoLTE_MO_Network_Connection_Rate'},
    {group: 'Voice', label: 'VoWiFi_MO_Connection_Rate'},
    {group: 'Voice', label: 'Perceived_Call_Drop_Rate'},
    {group: 'Voice', label: 'VoLTE_Call_Drop_Rate'},
    {group: 'Voice', label: 'VoWiFi_MO_Call_Drop_Rate'},
    {group: 'Voice', label: 'E2E_Call_Connection_Delay_ms'},
    {group: 'Voice', label: 'V2V_MO_Connection_Delay'},
    {group: 'Voice', label: 'VoWiFi_MO_Connection_Delay_ms'},
    {group: 'Voice', label: 'VoLTE_to_VoLTE_Voice_MOS'},*!/
    {group: 'Voice', label: 'VoLTE_'},
    {group: 'Voice', label: 'VoWiFi_'},
    {group: 'Voice', label: 'V2V_'},
    {group: 'Voice', label: 'E2E_'},
    {group: 'Voice', label: 'Perceived_'},
    /!*{group: 'WEB', label: 'Page_UL_TCP_Retransmission_Rate'},
    {group: 'WEB', label: 'Page_DL_TCP_Retransmission_Rate'},
    {group: 'WEB', label: 'Page_Server_Side_RTT'},
    {group: 'WEB', label: 'Page_Client_Side_RTT'},
    {group: 'WEB', label: 'Page_E2E_Delay'},
    {group: 'WEB', label: 'Page_Response_Delay_ms'},
    {group: 'WEB', label: 'Page_DL_Throughput_Kbps'},*!/
    {group: 'WEB', label: 'Page_'},
    /!* {group: 'Video_Streaming', label: 'Video_Stream_DL_TCP_Retransmission_Rate'},
     {group: 'Video_Streaming', label: 'Video_Streaming_xKB_Start_Delay'},
     {group: 'Video_Streaming', label: 'Video_Stream_Client_Side_Round_Trip_Time_ms'},
     {group: 'Video_Streaming', label: 'Video_Stream_E2E_Delay'},
     {group: 'Video_Streaming', label: 'Video_Stream_UL_TCP_Retransmission_Rate'},
     {group: 'Video_Streaming', label: 'Video_Stream_Server_Side_Round_Trip_Time_ms'},
     {group: 'Video_Streaming', label: 'Video_Streaming_Download_Throughput_Kbps'},*!/
    {group: 'Video_Streaming', label: 'Video_Streaming_'},
    {group: 'Video_Streaming', label: 'Video_'},
    /!* {group: 'IM', label: 'IM_DL_TCP_Packets_Loss_Rate'},
     {group: 'IM', label: 'IM_UL_TCP_Packets_Loss_Rate'},
     {group: 'IM', label: 'IM_Interacting_Delay'},
     {group: 'IM', label: 'IM_Server_Side_Round_Trip_Time_ms'},
     {group: 'IM', label: 'IM_Client_Side_Round_Trip_Time_ms'},*!/
    {group: 'IM', label: 'IM_'},
    /!*{group: 'File_Transfer', label: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate'},
    {group: 'File_Transfer', label: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate'},
    {group: 'File_Transfer', label: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate'},
    {group: 'File_Transfer', label: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate'},
    {group: 'File_Transfer', label: 'File_Sharing_Response_Delay'},
    {group: 'File_Transfer', label: 'File_Sharing_UL_Throughput_Kbps'},
    {group: 'File_Transfer', label: 'File_Sharing_DL_Throughput_Kbps'},
    {group: 'File_Transfer', label: 'Multimedia_Response_Delay'},
    {group: 'File_Transfer', label: 'Multimedia_UL_Throughput_Kbps'},
    {group: 'File_Transfer', label: 'Multimedia_DL_Throughput_Kbps'},*!/
    {group: 'File_Transfer', label: 'Multimedia_'},
    {group: 'File_Transfer', label: 'File_'},
]
*/

const animate = makeAnimated();
let newNewNewOptions = [];
let selectAll = [];

const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'white'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    multiValue: (styles, {data}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, {data}) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, {data}) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

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

class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someOptions: [],
            type: props.type.split('-'),
        }
    }

    read() {
        let obj = [];
        let getUrl = '';
        let SMS = {label: 'SMS', options: [{value: '*-SMS', label: 'Select All in Category', color: '#0088a7',}],};
        let WEB = {label: 'WEB', options: [{value: '*-WEB', label: 'Select All in Category', color: '#191b7a',}],};
        let Voice = {label: 'Voice', options: [{value: '*-Voice', label: 'Select All in Category', color: '#002b9a',}],};
        let Video = {label: 'Video_Streaming', options: [{value: '*-Video', label: 'Select All in Category', color: '#009b00',}],};
        let IM = {label: 'IM', options: [{value: '*-IM', label: 'Select All in Category', color: '#00943e',}],};
        let File = {label: 'File_Transfer', options: [{value: '*-File', label: 'Select All in Category', color: '#005200',}],};
        let Other = {label: 'Other', options: [{value: '*-Other', label: 'Select All in Category', color: '#445577',}],};
        let SelectAll = {label: '*', options: [{value: '*', label: 'Select All', color: '#c55c00',}]};

        switch (this.state.type[1]){
            case 'network':
                getUrl = 'http://panoramamed/API_KQI_PI/network/kqi';
                break;
            case 'region':
                getUrl = 'http://panoramamed/API_KQI_PI/region/kqi';
                break;
            case 'MSISDN':
                getUrl = 'http://panoramamed/API_KQI_PI/user/kqi';
                break;
        }

        fetch(getUrl)
            .then(response => response.json())
            .then(text => {
                text.split(',').forEach(word => {
                    if(word !== 'Date' && !word.startsWith('L2') && !word.startsWith('L3') && !word.startsWith('Msisdn') &&
                        (/*this.state.type[0]!=='monthly' || */!word.endsWith('Traffic_MB'))) {
                        obj.push({
                            value: word,
                            label: word,
                            color: '#FF8B00',
                        })
                        if (word.startsWith('SMS_')) {
                            //SMS
                            SMS.options.push({value: word, label: word, color: '#00B8D9',});
                        } else if (word.startsWith('VoLTE_') || word.startsWith('VoWiFi_') || word.startsWith('V2V_') ||
                            word.startsWith('E2E_') || word.startsWith('Perceived_')) {
                            //Voice
                            Voice.options.push({value: word, label: word, color: '#0052CC',});
                        } else if (word.startsWith('Page_')) {
                            //WEB
                            WEB.options.push({value: word, label: word, color: '#5243AA',});
                        } else if (word.startsWith('Video_') || word.startsWith('Video_Streaming_')) {
                            //Video_Streaming
                            Video.options.push({value: word, label: word, color: '#32cd32',});
                        } else if (word.startsWith('IM_')) {
                            //IM
                            IM.options.push({value: word, label: word, color: '#00c66b',});
                        } else if (word.startsWith('Multimedia_') || word.startsWith('File_')) {
                            //File_Transfer
                            File.options.push({value: word, label: word, color: '#008000',});
                        } else {
                            //Other
                            Other.options.push({value: word, label: word, color: '#7181A6',});
                        }
                    }
                })
            })
        newNewNewOptions.splice(0, newNewNewOptions.length);
        newNewNewOptions.push(SelectAll, SMS, WEB, Video, Voice, File, IM, Other);
        selectAll = obj;
    }

    onChange = (option, event) => {
        if (event.action === 'select-option' && event.option.value.startsWith('*')) {
            switch (event.option.value) {
                case '*-SMS':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[1].options));
                    //option = option.concat(newNewNewOptions[1].options)
                    break;
                case '*-WEB':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[2].options));
                    break;
                case '*-Video':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[3].options));
                    break;
                case '*-Voice':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[4].options));
                    break;
                case '*-File':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[5].options));
                    break;
                case '*-IM':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[6].options));
                    break;
                case '*-Other':
                    option = JSON.parse(JSON.stringify(newNewNewOptions[7].options));
                    break;
                default:
                    option = selectAll;
            }
            option.shift();
        } else if (event.action === 'remove-value' && event.removedValue.value.startsWith('*')) {
            //this part is currently not in effect because the select all option is removed from the list prior
            option.splice(0, option.length);
        }
        this.setState({someOptions: option,});
    }

    componentDidMount() {
        this.read();
        let prevSelection = JSON.parse(sessionStorage.getItem(this.props.type))
        if (prevSelection){
            this.setState({someOptions: prevSelection.kqis})
        }
    }

    render() {
        return (<Select
            isMulti
            name="kqi"
            closeMenuOnSelect={false}
            isSearchable={true}
            components={animate}
            options={newNewNewOptions}
            className="selectKQIs"
            classNamePrefix="select"
            placeholder="Click here to select something"
            defaultValue={this.state.someOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={this.onChange}
            styles={colourStyles}
            value={this.state.someOptions}
        />)
    }
}

export default SelectComponent