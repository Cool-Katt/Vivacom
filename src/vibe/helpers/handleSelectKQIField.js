import React, {Component} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
]
/!*const options = [
    {value: 'CS', label: 'CS'},
    {value: 'PS', label: 'PS'},

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
    {value: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate', label: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate'},
    {value: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate', label: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate'},
    {value: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate', label: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate'},
    {value: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate', label: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate'},
    {value: 'File_Sharing_Response_Delay', label: 'File_Sharing_Response_Delay'},
    {value: 'File_Sharing_UL_Throughput_Kbps', label: 'File_Sharing_UL_Throughput_Kbps'},
    {value: 'File_Sharing_DL_Throughput_Kbps', label: 'File_Sharing_DL_Throughput_Kbps'},
    {value: 'Multimedia_Response_Delay', label: 'Multimedia_Response_Delay'},
    {value: 'Multimedia_UL_Throughput_Kbps', label: 'Multimedia_UL_Throughput_Kbps'},
    {value: 'Multimedia_DL_Throughput_Kbps', label: 'Multimedia_DL_Throughput_Kbps'},
]*!/*/

const animate = makeAnimated();
const newNewNewOptions = []

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
    }

    read() {
        let receivedFileContents;
        let obj = [];
        //TODO: Change api url, maybe  surround the fetch in try too
        fetch('http://panorama3:8080/file.txt')
            .then(response => response.text())
            .then(text => {
                receivedFileContents = text
                    .replaceAll(/\([\w+\s+]*\)/gm, ' ')
                    .replaceAll('COLUMN_NAME', ' ')
                    .replace('date', '')
                    .replace('msisdn', '')
                    .replaceAll(/\W+/gm, '\n')
                    .trim().split('\n');
                receivedFileContents.forEach(word => {
                    obj.push({
                        value: word.toString().replace(/\b[A-Z][a-z0-9A-Z]+/g, str =>
                            str.toLocaleLowerCase()).replaceAll('_', ''),
                        label: word
                    })
                })
            })
        return obj;
    }

    componentDidMount() {
        try {
            newNewNewOptions.push({label: 'options', options: this.read()});
        } catch (err) {
            console.log(err);
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
            defaultValue={null}
            formatGroupLabel={formatGroupLabel}
        />)
    }
}

export default SelectComponent