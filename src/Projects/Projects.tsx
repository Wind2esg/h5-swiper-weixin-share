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
import { SImg, SVideo} from './ProjectsComponents';

let slides: Array<Array<any>> = [
    // slide 1
    [
        // <SImg src="" />,
        // <SImg src="" />,
        // <SImg src="" />,
        // <SImg src="" />
    ],
    // slide 2
    [
        // <SImg src="" />,
        // <SVideo src="" />,
        // <SImg src="" />,
    ],
    // slide 3
    [
        // <SImg src="" />,
        // <SVideo src="" />,
    ]
    // slide ...
];

export let projects = {} as AppState;
// the web page title
projects.htmlTitle = "";
// params for wechat share centre service
projects.wechatServiceUrl = "";
projects.wechatServiceParams = {};
// wechat share link params
projects.debug = true;
projects.shareTitle = "";
projects.shareDescription = "";
projects.shareImgSrc = "";
projects.shareLink = (window as any).location.href;
// slides' content
projects.contents = slides;
