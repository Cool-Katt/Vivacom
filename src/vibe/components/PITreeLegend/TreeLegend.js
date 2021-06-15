import React from "react";

export default function TreeLegend() {
    return (<>
        <div style={{
            content: 'linear-gradient(to left, #449FEE, #22B66E, #FFE600, #FF9F40, #E91E63)',
            width: '150px',
            height: '15px',
            position: 'absolute',
            right: '100px', bottom: '50px'
        }}/>
        <div style={{
            width: '150px',
            height: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            right: '100px', bottom: '75px'
        }}>
            <span>1</span>
            <span>3</span>
            <span>5</span>
        </div>
    </>)
}