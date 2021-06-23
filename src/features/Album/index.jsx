import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Yêu thì yêu không yêu thì yêu',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg'
        },
        {
            id: 2,
            name: 'Có chắc yêu là đây',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/a/0/9/ea096a8afb3f160d1f3f52fb8a068403.jpg'
        },
        {
            id: 3,
            name: 'Rap Việt thả thính cực chất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/2/2/d/122d4e48b229f122fddc7304aa8ab06f.jpg'
        },
    ]
    return (
        <div>
            <h2>Yêu là phải nghe</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;