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

let cdn = "https://res.manzhiyan.com/BrandDept/h5_191024/";

let slides: Array<Array<any>> = [
    // slide 1
    [
        <SImg src={`${cdn}1_1.jpg`} />,
        <SCarousel carouselClassName="carousel" 
            pagination={true} 
            paginationClassName="swiper-pagination" 
            srcs={[
                `${cdn}1_2c1.jpg`,
                `${cdn}1_2c2.jpg`,
                `${cdn}1_2c3.jpg`,
                `${cdn}1_2c4.jpg`
                ]} />,
        <SImg src={`${cdn}1_3.jpg`} />
    ],
    // slide 2
    [
        <SImg src={`${cdn}2_1.jpg`} />,
        <SVideo src={`${cdn}2_v1.mp4`} poster={`${cdn}2_p1.jpg`} />,
        <SImg src={`${cdn}2_3.jpg`} />
    ],
    // slide 3
    [
        <SImg src={`${cdn}3_1.jpg`} />,
    ]
    // slide ...
];

export let projects = {} as AppState;
// params for wechat share centre service
projects.wechatServiceUrl = "http://hh.manzhiyan.com/services/jssdkservice.php";
projects.wechatServiceParams = {token:"superm", url: (window as any).location.href };
// wechat share link params
projects.debug = false;
projects.shareTitle = "科技力 x 超模肌，超模张龄月率性定义“私人定制”！";
projects.shareDescription = "蔓之研 · 私人定制，看超模张龄月解锁N面“未来肌”！";
projects.shareImgSrc = "https://res.manzhiyan.com/BrandDept/h5_191024/sharelogo.png";
projects.shareLink = (window as any).location.href;
// slides' content
projects.contents = slides;
