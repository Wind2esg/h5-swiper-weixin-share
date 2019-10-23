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
import { WeixinShareLink } from 'weixin-sharelink';
import Wgswiper from 'wgswiper';
import { projects } from '../Projects/Projects';

// #def
export interface AppState{
  debug: boolean;
  htmlTitle: string;
  contents: Array<Array<any>>;
  wechatServiceUrl: string,
  wechatServiceParams: any,
  shareTitle: string;
  shareDescription: string;
  shareImgSrc: string;
  shareLink: string;
}

// #App component
export default class App extends React.Component<{}, AppState>{
    constructor(props: any){
        super(props);
        this.state = projects;
    }

    componentDidMount(){
      // wechat share
      new WeixinShareLink(
          {
              debug: this.state.debug,
              title: this.state.shareTitle,
              desc: this.state.shareDescription,
              link: this.state.shareLink,
              imgUrl: this.state.shareImgSrc
          },
          {
              url: this.state.wechatServiceUrl,
              params: this.state.wechatServiceParams
          },
          'json'
      )

      // swiper init
      let swiper = new Wgswiper().getSwiper();

      // deal with video
      swiper.on('slideChange', ()=>{
        for (let video of (document.querySelectorAll('video-show') as any)) {
          video.pause();
        }
      })

    }
    render(){
      let swiperSlide = this.state.contents.map((slider, index)=>
        (<div className="swiper-slide" key={index}>
          <div className="wgswiper-slide-height">
            {slider.map((item, index)=>{
              return (
                <React.Fragment key={index}>
                  {item}
                </React.Fragment>
              );
            })}
          </div>
        </div>)
      );
      return (
        <div className="wgswiper-container swiper-container" >
          <div className="swiper-wrapper" >
            { swiperSlide }
          </div>
        </div>
      );
    }
}

