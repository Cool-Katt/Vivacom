import chroma from 'chroma-js'

const hierarchy = [
    {level: 0, color: '#000080', father: 'Network', label: 'CS',},
    {level: 0, color: '#006400', father: 'Network', label: 'PS',},
    {level: 1, color: '#00B8D9', father: 'CS', label: 'Voice'},
    {level: 1, color: '#0052CC', father: 'CS', label: 'SMS'},
    {level: 1, color: '#5243AA', father: 'PS', label: 'WEB'},
    {level: 1, color: '#32CD32', father: 'PS', label: 'Video_Streaming'},
    {level: 1, color: '#00c66b', father: 'PS', label: 'IM'},
    {level: 1, color: '#008000', father: 'PS', label: 'File_Transfer'},
    {level: 2, color: '#0093B3', father: 'Voice', label: 'Call_Setup_Success_Rate'},
    {level: 2, color: '#006F8E', father: 'Voice', label: 'Call_Completion_Failure_Rate'},
    {level: 2, color: '#004D6B', father: 'Voice', label: 'Call_Setup_Time'},
    {level: 2, color: '#738EFF', father: 'SMS', label: 'SMS_Delay_ms'},
    {level: 2, color: '#496FEF', father: 'SMS', label: 'SMS_Service_Availability'},
    {level: 2, color: '#7662CE', father: 'WEB', label: 'WEB_Browsing_Integrity'},
    {level: 2, color: '#4C3EA5', father: 'WEB', label: 'WEB_Browsing_Retainability'},
    {level: 2, color: '#00A400', father: 'Video_Streaming', label: 'Video_Streaming_Integrity'},
    {level: 2, color: '#007D00', father: 'Video_Streaming', label: 'Video_Streaming_Retainability'},
    {level: 2, color: '#009F48', father: 'IM', label: 'IM_Integrity'},
    {level: 2, color: '#00C66B', father: 'IM', label: 'IM_Retainability'},
    {level: 2, color: '#349D2B', father: 'File_Transfer', label: 'File_Sharing_Integrity'},
    {level: 2, color: '#005900', father: 'File_Transfer', label: 'File_Sharing_Retainability'},
    {level: 2, color: '#08830C', father: 'File_Transfer', label: 'Multimedia_Integrity'},
    {level: 3, color: '#6b88fc', father: 'SMS_Delay', label: 'SMS_Origination_Delay_ms'},
    {level: 3, color: '#6481f9', father: 'SMS_Delay', label: 'SMS_Termination_Delay_ms'},
    {level: 3, color: '#5b7bf5', father: 'SMS_Service_Availability', label: 'SMS_Termination_Rate'},
    {level: 3, color: '#5375f2', father: 'SMS_Service_Availability', label: 'SMS_Origination_Success_Rate'},
    {level: 3, color: '#008cac', father: 'Call_Setup_Success_Rate', label: 'Perceived_Call_Success_Rate'},
    {level: 3, color: '#0086a5', father: 'Call_Setup_Success_Rate', label: 'VoLTE_MO_Network_Connection_Rate'},
    {level: 3, color: '#007f9f', father: 'Call_Setup_Success_Rate', label: 'VoWiFi_MO_Connection_Rate'},
    {level: 3, color: '#007998', father: 'Call_Completion_Failure_Rate', label: 'Perceived_Call_Drop_Rate'},
    {level: 3, color: '#007291', father: 'Call_Completion_Failure_Rate', label: 'VoLTE_Call_Drop_Rate'},
    {level: 3, color: '#006c8b', father: 'Call_Completion_Failure_Rate', label: 'VoWiFi_MO_Call_Drop_Rate'},
    {level: 3, color: '#006684', father: 'Call_Setup_Time', label: 'E2E_Call_Connection_Delay_ms'},
    {level: 3, color: '#005f7e', father: 'Call_Setup_Time', label: 'V2V_MO_Connection_Delay'},
    {level: 3, color: '#005978', father: 'Call_Setup_Time', label: 'VoWiFi_MO_Connection_Delay_ms'},
    {level: 3, color: '#005371', father: 'Call_Setup_Time', label: 'VoLTE_to_VoLTE_Voice_MOS'},
    {level: 3, color: '#715dc9', father: 'WEB_Browsing_Retainability', label: 'Page_UL_TCP_Retransmission_Rate'},
    {level: 3, color: '#6c59c4', father: 'WEB_Browsing_Retainability', label: 'Page_DL_TCP_Retransmission_Rate'},
    {level: 3, color: '#6654be', father: 'WEB_Browsing_Integrity', label: 'Page_Server_Side_RTT'},
    {level: 3, color: '#6150b9', father: 'WEB_Browsing_Integrity', label: 'Page_Client_Side_RTT'},
    {level: 3, color: '#5c4bb4', father: 'WEB_Browsing_Integrity', label: 'Page_E2E_Delay'},
    {level: 3, color: '#5747af', father: 'WEB_Browsing_Integrity', label: 'Page_Response_Delay_ms'},
    {level: 3, color: '#5142aa', father: 'WEB_Browsing_Integrity', label: 'Page_DL_Throughput_Kbps'},
    {level: 3, color: '#009f00', father: 'Video_Streaming_Retainability', label: 'Video_Stream_DL_TCP_Retransmission_Rate'},
    {level: 3, color: '#009a00', father: 'Video_Streaming_Retainability', label: 'Video_Stream_UL_TCP_Retransmission_Rate'},
    {level: 3, color: '#009500', father: 'Video_Streaming_Integrity', label: 'Video_Streaming_xKB_Start_Delay'},
    {level: 3, color: '#009000', father: 'Video_Streaming_Integrity', label: 'Video_Stream_Client_Side_Round_Trip_Time_ms'},
    {level: 3, color: '#008b00', father: 'Video_Streaming_Integrity', label: 'Video_Stream_E2E_Delay'},
    {level: 3, color: '#008700', father: 'Video_Streaming_Integrity', label: 'Video_Stream_Server_Side_Round_Trip_Time_ms'},
    {level: 3, color: '#008200', father: 'Video_Streaming_Integrity', label: 'Video_Streaming_Download_Throughput_Kbps'},
    {level: 3, color: '#00a54e', father: 'IM_Retainability', label: 'IM_DL_TCP_Packets_Loss_Rate'},
    {level: 3, color: '#01ac54', father: 'IM_Retainability', label: 'IM_UL_TCP_Packets_Loss_Rate'},
    {level: 3, color: '#01b259', father: 'IM_Integrity', label: 'IM_Interacting_Delay'},
    {level: 3, color: '#01b95f', father: 'IM_Integrity', label: 'IM_Server_Side_Round_Trip_Time_ms'},
    {level: 3, color: '#00bf65', father: 'IM_Integrity', label: 'IM_Client_Side_Round_Trip_Time_ms'},
    {level: 3, color: '#329b2a', father: 'File_Sharing_Retainability', label: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate'},
    {level: 3, color: '#319828', father: 'File_Sharing_Retainability', label: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate'},
    {level: 3, color: '#2f9627', father: 'File_Sharing_Retainability', label: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate'},
    {level: 3, color: '#2d9325', father: 'File_Sharing_Retainability', label: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate'},
    {level: 3, color: '#2c9123', father: 'File_Sharing_Integrity', label: 'File_Sharing_Response_Delay'},
    {level: 3, color: '#2a8e22', father: 'File_Sharing_Integrity', label: 'File_Sharing_UL_Throughput_Kbps'},
    {level: 3, color: '#288c20', father: 'File_Sharing_Integrity', label: 'File_Sharing_DL_Throughput_Kbps'},
    {level: 3, color: '#26891f', father: 'Multimedia_Integrity', label: 'Multimedia_Response_Delay'},
    {level: 3, color: '#25871d', father: 'Multimedia_Integrity', label: 'Multimedia_UL_Throughput_Kbps'},
    {level: 3, color: '#23841b', father: 'Multimedia_Integrity', label: 'Multimedia_DL_Throughput_Kbps'},
]

export const tree = {
    name: 'Network',
    children: [
        {
            name: 'CS',
            attributes: {value: 5,},
            children: [
                {
                    name: 'Voice',
                    attributes: {value: 5,},
                },
                {
                    name: 'SMS',
                    attributes: {value: 5,},
                    children: [
                        {
                            name: 'SMS Delay',
                            attributes: {value: 5,},
                            children: [
                                {
                                    name: 'SMS Origination Delay ms',
                                    attributes: {value: 5,},
                                },
                                {
                                    name: 'SMS Termination Delay ms',
                                    attributes: {value: 5,},
                                },
                            ]
                        },
                        {
                            name: 'SMS Service Availability',
                            attributes: {value: 5,},
                            children: [
                                {
                                    name: 'SMS Termination Rate',
                                    attributes: {value: 5,},
                                },
                                {
                                    name: 'SMS Origination Success Rate',
                                    attributes: {value: 5,},
                                },
                            ]
                        },
                    ]
                },
            ],
        },
        {
            name: 'PS',
            attributes: {value: 5,},
            children: [
                {
                    name: 'WEB',
                    attributes: {value: 5,},
                },
                {
                    name: 'Video Streaming',
                    attributes: {value: 5,},
                },
                {
                    name: 'IM',
                    attributes: {value: 5,},
                },
                {
                    name: 'File Transfer',
                    attributes: {value: 5,},
                },
            ],
        },
    ],
}

export const colourMaker = (key) => {
    let colour = '#7181A6';
    hierarchy.forEach(item => {
        if (key === item.label) {
            colour = item.color
        }
    })
    return chroma(colour).css()
}