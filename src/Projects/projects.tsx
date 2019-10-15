/**
 * projects.tsx
 * 
 * @author wind2esg
 * @date 20191011
 * 
 * basicly add todo here
 * 
 * #content     cdnUrl, slide content
 * #appProps    
 */
import { Projects, SliderContent } from '../App/App';

let cdnUrl: string = "";

let slides: Array<Array<SliderContent>> = [

    [
        {src:``},
        {src:``},
    ],
    [
        {src:``},
        {src:``},

    ],
    [
        {src:``},
        {src:``, poster:``}
    ]
];

export let projects = {} as Projects;
projects.debug = true;
projects.htmlTitle = "";
projects.contents = slides;
projects.wechatServiceUrl = "";
projects.wechatServiceParams = {};
projects.shareTitle = "";
projects.shareDescription = "";
projects.shareImgSrc = "";
projects.shareLink = (window as any).location.href;