/**
 * ProjectsComponents.tsx
 * 
 * @author wind2esg
 * @date 20191016
 * 
 * your components here
 */

import React from 'react';

interface SImgProps{
    src: string;
    alt?: string;
}

interface SVideoProps{
    poster?: string;
    src: string;
    type?: string;
}

export class SImg extends React.Component<SImgProps>{
    render(){
        return (
            <img src={this.props.src} alt={this.props.alt ? this.props.alt : ""}  />
        );
    }
}

export class SVideo extends React.Component<SVideoProps>{
    render(){
        return (
            <video controls playsInline webkit-playsinline="true"  poster={this.props.poster ? this.props.poster : ""} >
                <source src={this.props.src} type={this.props.type ? this.props.type : "video/mp4" } ></source>
            </video>
        );
    }
}
