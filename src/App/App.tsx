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
import { projects } from '../Projects/Projects';
import { WeixinShareLink } from 'weixin-sharelink';
import Wgswiper from 'wgswiper';

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
      new Wgswiper();
  }
    render(){
      let swiperSlide = this.state.contents.map((slider, index)=>
        (<div className="swiper-slide" key={index}>
          <div className="slide-height">
            {slider.map((item, index)=>{
              return (
                <div key={index}>
                  {item}
                </div>
              );
            })}
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

