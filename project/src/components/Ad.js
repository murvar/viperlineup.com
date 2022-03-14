import React, { useState, useEffect } from 'react';

export default function Ad() {

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    })


    
    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: 'block' , textAlign: "center"}}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-2476150477980411"
                data-ad-slot="3390154907">
            </ins>
        </div>
    )
}
