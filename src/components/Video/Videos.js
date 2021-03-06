import React, { useRef, useEffect, useState } from 'react';
import Video from './Video';

const Videos = ({videoItems, containers}) => {
    const imageContainersRef = useRef(null);
    const [containerList, setContainerList] = useState([]);


    useEffect(() => {
        let list = [];
        for(let i=0; i<containers; i++){
            list.push((
                <div key={i} className='media-container video-container'>
                    <Video videoItems={videoItems} indexPosition={i} videoX={containers} />
                </div>
            ));
        }
        setContainerList(list);
    }, [containers, videoItems,]);

    return (
        <div ref={imageContainersRef} className='media-containers video-containers'>
            {containerList}
        </div>
    )
}

export default Videos;
