import chroma from 'chroma-js'

const hierarchy = [
    {level: 0, colour: '#000080', parent: 'Network', child: 'CS',},
    {level: 0, colour: '#006400', parent: 'Network', child: 'PS',},
    {level: 1, colour: '#00B8D9', parent: 'CS', child: 'Voice'},
    {level: 1, colour: '#0052CC', parent: 'CS', child: 'SMS'},
    {level: 1, colour: '#5243AA', parent: 'PS', child: 'WEB'},
    {level: 1, colour: '#32CD32', parent: 'PS', child: 'Video_Streaming'},
    {level: 1, colour: '#00c66b', parent: 'PS', child: 'IM'},
    {level: 1, colour: '#008000', parent: 'PS', child: 'File_Transfer'},
    {level: 2, colour: '#0093B3', parent: 'Voice', child: 'Call_Setup_Success_Rate'},
    {level: 2, colour: '#006F8E', parent: 'Voice', child: 'Call_Completion_Failure_Rate'},
    {level: 2, colour: '#004D6B', parent: 'Voice', child: 'Call_Setup_Time'},
    {level: 2, colour: '#738EFF', parent: 'SMS', child: 'SMS_Delay_ms'},
    {level: 2, colour: '#496FEF', parent: 'SMS', child: 'SMS_Service_Availability'},
    {level: 2, colour: '#7662CE', parent: 'WEB', child: 'WEB_Browsing_Integrity'},
    {level: 2, colour: '#4C3EA5', parent: 'WEB', child: 'WEB_Browsing_Retainability'},
    {level: 2, colour: '#00A400', parent: 'Video_Streaming', child: 'Video_Streaming_Integrity'},
    {level: 2, colour: '#007D00', parent: 'Video_Streaming', child: 'Video_Streaming_Retainability'},
    {level: 2, colour: '#009F48', parent: 'IM', child: 'IM_Integrity'},
    {level: 2, colour: '#00C66B', parent: 'IM', child: 'IM_Retainability'},
    {level: 2, colour: '#349D2B', parent: 'File_Transfer', child: 'File_Sharing_Integrity'},
    {level: 2, colour: '#005900', parent: 'File_Transfer', child: 'File_Sharing_Retainability'},
    {level: 2, colour: '#08830C', parent: 'File_Transfer', child: 'Multimedia_Integrity'},
    {level: 3, colour: '#6b88fc', parent: 'SMS_Delay', child: 'SMS_Origination_Delay_ms'},
    {level: 3, colour: '#6481f9', parent: 'SMS_Delay', child: 'SMS_Termination_Delay_ms'},
    {level: 3, colour: '#5b7bf5', parent: 'SMS_Service_Availability', child: 'SMS_Termination_Rate'},
    {level: 3, colour: '#5375f2', parent: 'SMS_Service_Availability', child: 'SMS_Origination_Success_Rate'},
    {level: 3, colour: '#008cac', parent: 'Call_Setup_Success_Rate', child: 'Perceived_Call_Success_Rate'},
    {level: 3, colour: '#0086a5', parent: 'Call_Setup_Success_Rate', child: 'VoLTE_MO_Network_Connection_Rate'},
    {level: 3, colour: '#007f9f', parent: 'Call_Setup_Success_Rate', child: 'VoWiFi_MO_Connection_Rate'},
    {level: 3, colour: '#007998', parent: 'Call_Completion_Failure_Rate', child: 'Perceived_Call_Drop_Rate'},
    {level: 3, colour: '#007291', parent: 'Call_Completion_Failure_Rate', child: 'VoLTE_Call_Drop_Rate'},
    {level: 3, colour: '#006c8b', parent: 'Call_Completion_Failure_Rate', child: 'VoWiFi_MO_Call_Drop_Rate'},
    {level: 3, colour: '#006684', parent: 'Call_Setup_Time', child: 'E2E_Call_Connection_Delay_ms'},
    {level: 3, colour: '#005f7e', parent: 'Call_Setup_Time', child: 'V2V_MO_Connection_Delay'},
    {level: 3, colour: '#005978', parent: 'Call_Setup_Time', child: 'VoWiFi_MO_Connection_Delay_ms'},
    {level: 3, colour: '#005371', parent: 'Call_Setup_Time', child: 'VoLTE_to_VoLTE_Voice_MOS'},
    {level: 3, colour: '#715dc9', parent: 'WEB_Browsing_Retainability', child: 'Page_UL_TCP_Retransmission_Rate'},
    {level: 3, colour: '#6c59c4', parent: 'WEB_Browsing_Retainability', child: 'Page_DL_TCP_Retransmission_Rate'},
    {level: 3, colour: '#6654be', parent: 'WEB_Browsing_Integrity', child: 'Page_Server_Side_RTT'},
    {level: 3, colour: '#6150b9', parent: 'WEB_Browsing_Integrity', child: 'Page_Client_Side_RTT'},
    {level: 3, colour: '#5c4bb4', parent: 'WEB_Browsing_Integrity', child: 'Page_E2E_Delay'},
    {level: 3, colour: '#5747af', parent: 'WEB_Browsing_Integrity', child: 'Page_Response_Delay_ms'},
    {level: 3, colour: '#5142aa', parent: 'WEB_Browsing_Integrity', child: 'Page_DL_Throughput_Kbps'},
    {level: 3, colour: '#009f00', parent: 'Video_Streaming_Retainability', child: 'Video_Stream_DL_TCP_Retransmission_Rate'},
    {level: 3, colour: '#009a00', parent: 'Video_Streaming_Retainability', child: 'Video_Stream_UL_TCP_Retransmission_Rate'},
    {level: 3, colour: '#009500', parent: 'Video_Streaming_Integrity', child: 'Video_Streaming_xKB_Start_Delay'},
    {level: 3, colour: '#009000', parent: 'Video_Streaming_Integrity', child: 'Video_Stream_Client_Side_Round_Trip_Time_ms'},
    {level: 3, colour: '#008b00', parent: 'Video_Streaming_Integrity', child: 'Video_Stream_E2E_Delay'},
    {level: 3, colour: '#008700', parent: 'Video_Streaming_Integrity', child: 'Video_Stream_Server_Side_Round_Trip_Time_ms'},
    {level: 3, colour: '#008200', parent: 'Video_Streaming_Integrity', child: 'Video_Streaming_Download_Throughput_Kbps'},
    {level: 3, colour: '#00a54e', parent: 'IM_Retainability', child: 'IM_DL_TCP_Packets_Loss_Rate'},
    {level: 3, colour: '#01ac54', parent: 'IM_Retainability', child: 'IM_UL_TCP_Packets_Loss_Rate'},
    {level: 3, colour: '#01b259', parent: 'IM_Integrity', child: 'IM_Interacting_Delay'},
    {level: 3, colour: '#01b95f', parent: 'IM_Integrity', child: 'IM_Server_Side_Round_Trip_Time_ms'},
    {level: 3, colour: '#00bf65', parent: 'IM_Integrity', child: 'IM_Client_Side_Round_Trip_Time_ms'},
    {level: 3, colour: '#329b2a', parent: 'File_Sharing_Retainability', child: 'File_Access_Server_Side_Uplink_TCP_Packet_Loss_Rate'},
    {level: 3, colour: '#319828', parent: 'File_Sharing_Retainability', child: 'File_Access_Server_Side_Downlink_TCP_Packet_Loss_Rate'},
    {level: 3, colour: '#2f9627', parent: 'File_Sharing_Retainability', child: 'File_Access_Client_Side_Uplink_TCP_Packet_Loss_Rate'},
    {level: 3, colour: '#2d9325', parent: 'File_Sharing_Retainability', child: 'File_Access_Client_Side_Downlink_TCP_Packet_Loss_Rate'},
    {level: 3, colour: '#2c9123', parent: 'File_Sharing_Integrity', child: 'File_Sharing_Response_Delay'},
    {level: 3, colour: '#2a8e22', parent: 'File_Sharing_Integrity', child: 'File_Sharing_UL_Throughput_Kbps'},
    {level: 3, colour: '#288c20', parent: 'File_Sharing_Integrity', child: 'File_Sharing_DL_Throughput_Kbps'},
    {level: 3, colour: '#26891f', parent: 'Multimedia_Integrity', child: 'Multimedia_Response_Delay'},
    {level: 3, colour: '#25871d', parent: 'Multimedia_Integrity', child: 'Multimedia_UL_Throughput_Kbps'},
    {level: 3, colour: '#23841b', parent: 'Multimedia_Integrity', child: 'Multimedia_DL_Throughput_Kbps'},
]

//TODO: delete this once the API endpoint for tree data is set and working
export const tree = {
    name: 'Network',
    attributes: {value: null, weight: '100%'},
    children: [
        {
            name: 'CS',
            attributes: {value: 5,},
            children: [
                {
                    name: 'Voice',
                    attributes: {value: 5,},
                    children: [
                        {
                            name: 'Call Setup Success Rate',
                            attributes: {value: 3,},
                            children: [
                                {
                                    name: 'Perceived Call Success Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'VoLTE MO Network Connection Rate',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'VoWiFi MO Connection Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'Call Completion Failure Rate',
                            attributes: {value: 5,},
                            children: [
                                {
                                    name: 'Perceived Call Drop Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'VoLTE Call Drop Rate',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'VoWiFi MO Call Drop Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'VoLTE MOS',
                            attributes: {value: 5,},
                            children: [
                                {
                                    name: 'VoLTE to VoLTE Voice MOS',
                                    attributes: {value: 4,},
                                }
                            ],
                        },
                        {
                            name: 'Call Setup Time',
                            attributes: {value: 3,},
                            children: [
                                {
                                    name: 'E2E Call Connection Delay ms',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'V2V MO Connection Delay',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'VoWiFi MO Connection Delay ms',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                    ]
                },
                {
                    name: 'SMS',
                    attributes: {value: 4,},
                    children: [
                        {
                            name: 'SMS Delay',
                            attributes: {value: 3,},
                            children: [
                                {
                                    name: 'SMS Origination Delay ms',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'SMS Termination Delay ms',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'SMS Service Availability',
                            attributes: {value: 5,},
                            children: [
                                {
                                    name: 'SMS Termination Rate',
                                    attributes: {level: 4,},
                                },
                                {
                                    name: 'SMS Origination Success Rate',
                                    attributes: {value: 5,},
                                },
                            ],
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
                    children: [
                        {
                            name: 'WEB Browsing Integrity',
                            attributes: {value: 7,},
                            children: [
                                {
                                    name: 'Page Server Side RTT',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'Page Client Side RTT',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Page E2E Delay',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Page Response Delay ms',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Page DL Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'WEB Browsing Retainability',
                            attributes: {value: 1,},
                            children: [
                                {
                                    name: 'Page UL TCP Retransmission Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'Page DL TCP Retransmission Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Video Streaming',
                    attributes: {value: 5,},
                    children: [
                        {
                            name: 'Video Streaming Integrity',
                            attributes: {value: 7,},
                            children: [
                                {
                                    name: 'Video Streaming xKB Start Delay',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'Video Stream Client Side Round Trip Time ms',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Video Stream E2E Delay',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Video Stream Server Side Round Trip Time ms',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Video Streaming Download Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'Video Streaming Retainability',
                            attributes: {value: 1,},
                            children: [
                                {
                                    name: 'Video Stream UL TCP Retransmission Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'Video Stream DL TCP Retransmission Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'IM',
                    attributes: {value: 5,},
                    children: [
                        {
                            name: 'IM Integrity',
                            attributes: {value: 4,},
                            children: [
                                {
                                    name: 'IM Interacting Delay',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'IM Server Side Round Trip Time ms',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'IM Client Side Round Trip Time ms',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'IM Retainability',
                            attributes: {value: 2,},
                            children: [
                                {
                                    name: 'IM UL TCP Packets Loss Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'IM DL TCP Packets Loss Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'File Transfer',
                    attributes: {value: 5,},
                    children: [
                        {
                            name: 'File Sharing Integrity',
                            attributes: {value: 4,},
                            children: [
                                {
                                    name: 'File Sharing Response Delay',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'File Sharing UL Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'File Sharing DL Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'File Sharing Retainability',
                            attributes: {value: 2,},
                            children: [
                                {
                                    name: 'File Access Server Side Uplink TCP Packet Loss Rate',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'File Access Server Side Downlink TCP Packet Loss Rate',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'File Access Client Side Uplink TCP Packet Loss Rate',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'File Access Client Side Downlink TCP Packet Loss Rate',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                        {
                            name: 'Multimedia Integrity',
                            attributes: {value: 2,},
                            children: [
                                {
                                    name: 'Multimedia Response Delay',
                                    attributes: {value: 2,},
                                },
                                {
                                    name: 'Multimedia UL Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                                {
                                    name: 'Multimedia DL Throughput Kbps',
                                    attributes: {value: 1,},
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

export const generateHierarchy = (links, attributeFields) => {
    const nodesByName = {};

    const assignNodeWithAttributes = (name, attributes) => {
        if (!nodesByName[name]) {
            nodesByName[name] = {
                name,
                attributes,
            };
        }
        return nodesByName[name];
    };

    links.forEach(link => {
        if (attributeFields) {
            const customAttributes = {};
            attributeFields.forEach(field => {
                customAttributes[field] = link[field];
            });
            link.attributes = customAttributes;
        }

        link.source = assignNodeWithAttributes(link.parent, link.attributes);
        link.target = assignNodeWithAttributes(link.child, link.attributes);
        const parent = link.source;
        const child = link.target;

        child.parent = parent.name || null;
        parent.children ? parent.children.push(child) : (parent.children = [child]);
    });
    const rootLinks = links.filter(link => !link.source.parent);
    return rootLinks[0].source;
}

export const testGenerateHierarchy = () => {
    return generateHierarchy(hierarchy, ['colour']);
}

export const colourMaker = (key) => {
    let colour = '#7181A6';
    hierarchy.forEach(item => {
        if (key === item.child) {
            colour = item.colour
        }
    })
    return chroma(colour).css();
}