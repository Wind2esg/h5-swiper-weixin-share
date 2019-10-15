/**
 * App.tsx
 * 
 * @author wind2esg
 * @date 20191011
 * @update 20191015
 * 
 * #def   define interface, type guard function
 * #App   component, render doms, wechat share and swiper init
 */

import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { projects } from '../Projects/projects';
import { WeixinShareLink } from 'weixin-sharelink';
import Wgswiper from 'wgswiper';

// #def
export interface Projects{
  debug: boolean;
  htmlTitle: string;
  contents: Array<Array<SliderContent>>;
  wechatServiceUrl: string,
  wechatServiceParams: any,
  shareTitle: string;
  shareDescription: string;
  shareImgSrc: string;
  shareLink: string;
}

export type SliderContent = SImg | SVideo;

function IsSVideo(sliderContent: SliderContent): sliderContent is SVideo{
  return (sliderContent as SVideo).poster !== undefined;
}

interface SImg{
  src: string;
}

interface SVideo{
  src: string;
  poster: string;
}

// #App component
export default class App extends React.Component<{}, Projects>{
    constructor(props: any){
        super(props);
        this.state = projects;
    }

    componentDidMount(){
      // wechat share
      new WeixinShareLink(
          {
              debug: projects.debug,
              title: projects.shareTitle,
              desc: projects.shareDescription,
              link: projects.shareLink,
              imgUrl: projects.shareImgSrc
          },
          {
              url: projects.wechatServiceUrl,
              params: projects.wechatServiceParams
          }
      )

      // swiper init
      new Wgswiper();
  }
    render(){
      let swiperSlide = this.state.contents.map((slider, index)=>
        (<div className="swiper-slide" key={index}>
          <div className="slide-height">
            {slider.map((item, index)=>
                IsSVideo(item)
                ?
                <video controls playsInline webkit-playsinline="true"  poster={item.poster} key={index}>
                  <source src={item.src} type="video/mp4"></source>
                </video>
                :
                <img src={item.src} alt="" key={index}></img>
            )}
          </div>
        </div>)
      );
      return (
        <div className="swiper-container" >
          <div className="swiper-wrapper" >
            { swiperSlide }
          </div>
          
          <Helmet>
          <title>{ this.state.htmlTitle }</title>
          </Helmet>
        </div>
      );
    }
}

