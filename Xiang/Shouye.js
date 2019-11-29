import React, { Component } from 'react'
import { CoverageMap } from 'istanbul-lib-coverage'

export default class Shouye extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor:'red',width:'100%',height:'30'}}><span style={{paddingLeft:'42%'}}>呦呦育儿</span></div>
                <div className='shouye2'style={{background:'url("images/9.jpg")',backgroundSize:'cover',opacity:'0.9'}}>
                    <span className="shouye3"style={{fontSize:'200%',color:'white'}}>宝宝今天：3岁5个月</span>
                </div>
                    {/* <img
                        
                        style={{opacity:'0.3'}} 
                        src='images/1.png'
                        width='100%'height='200'
                       /> 
                       <button style={{backgroundColor:'#e98f36'}}>宝宝今天：3岁5个月</button> */}
                        
                {/* </div> */}
                {/* <div style={{width:'100%',heigth:'70%',backgroundColor:'white'}}> */}
                    <div style={{float:'left',paddingLeft:'8%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                        
                            src='images/2.png'/>
                        <p>识图</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/3.png'/>
                        <p>识字</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/4.png'/>
                        <p>催眠曲</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'7%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/5.png'
                            />
                        <p>睡前故事</p>
                    </div>
                    <div style={{float:'left',paddingLeft:'6%',backgroundColor:'white'}}>
                        <img 
                            width='40'height='40'
                            src='images/6.png'
                            />
                        <p>亲子游戏</p>
                    </div>
                   
                   
                {/* </div> */}
                {/* <div className='shouye1'>

                </div> */}
                <button className="shouye1">
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/7.png'
                        width='30' height='30'
                        />
                     <span style={{fontSize:'150%'}}>今日随想</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>
                <button className="shouye1" >
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/7.png'
                        width='30' height='30'
                        />
                    <span style={{fontSize:'150%'}}>宝宝健康</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>
                <button className="shouye1" >
                    <img
                        style={{marginLeft:'50'}} 
                        src='images/7.png'
                        width='30' height='30'
                        />
                    <span style={{fontSize:'150%'}}>今日随想</span>
                    <span style={{fontSize:'10',paddingLeft:'25%'}}>2019年11月27日</span>
                </button>
                
            </div>
        )
    }
}
