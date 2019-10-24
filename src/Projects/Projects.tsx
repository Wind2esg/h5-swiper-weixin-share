/**
 * Projects.tsx
 * 
 * @author wind2esg
 * @date 20191011
 * 
 * basicly add todo here
 * 
 * #slides      array for your slide content
 * #projects    all you fill transfer to app component's state
 */
import React from 'react';
import { AppState } from '../App/App';
import { SImg, SVideo, SCarousel } from './ProjectsComponents';

let slides: Array<Array<any>> = [
    // slide 1
    [
        <SImg src="https://res.manzhiyan.com/BrandDept/h5_191024/1_1.jpg" />,
        <SCarousel carouselClassName="carousel" 
            pagination={true} 
            paginationClassName="swiper-pagination" 
            srcs={[
                "https://res.manzhiyan.com/BrandDept/h5_191024/1_2c1.jpg",
                "https://res.manzhiyan.com/BrandDept/h5_191024/1_2c2.jpg",
                "https://res.manzhiyan.com/BrandDept/h5_191024/1_2c3.jpg",
                "https://res.manzhiyan.com/BrandDept/h5_191024/1_2c4.jpg"
            ]} />,
        <SImg src="https://res.manzhiyan.com/BrandDept/h5_191024/1_3.jpg" />
    ],
    // slide 2
    [
        <SImg src="https://res.manzhiyan.com/BrandDept/h5_191024/2_1.jpg" />,
        <SVideo src="https://res.manzhiyan.com/BrandDept/h5_191024/2_v1.mp4" poster="https://res.manzhiyan.com/BrandDept/h5_191024/2_p1.jpg" />,
        <SImg src="https://res.manzhiyan.com/BrandDept/h5_191024/2_3.jpg" />
    ],
    // slide 3
    [
        <SImg src="https://res.manzhiyan.com/BrandDept/h5_191024/3_1.jpg" />,
    ]
    // slide ...
];

export let projects = {} as AppState;
// params for wechat share centre service
projects.wechatServiceUrl = "http://hh.manzhiyan.com/services/jssdkservice.php";
projects.wechatServiceParams = {token:"superm", url: (window as any).location.href };
// wechat share link params
projects.debug = false;
projects.shareTitle = "";
projects.shareDescription = "";
projects.shareImgSrc = "";
projects.shareLink = (window as any).location.href;
// slides' content
projects.contents = slides;
