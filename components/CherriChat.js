import React from "react";
import List from "../components/list";
import Header from '../components/header'
import Chat from '../components/chat'
import Image from 'next/image'
export default class CherriChat extends React.Component {
  constructor(props) {
    // 初始化
    super(props);
  }

  render() {
    return (
        <div className="cherri-chat-content">
            <List />
            <div className='right-side'>
                <Header />
                {/* <div className='cover'>
                <Image src="/images/img_default.png" alt="cover" width="240" height="200" />
                <div className='cover-title'>開始使用 Cherri Chat !</div>
                </div> */}
                <Chat />
            </div>
            <style jsx style={scss}>{`
                .cherri-chat-content {
                    display: flex;
                    width: 100%;
                    height: 100%;
                }
                .right-side {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .cover {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                }
                .cover-title {
                    font-size: 32px;
                    font-weight: bold;
                    color: #4A90E2;
                    margin-top: 20px;
                }
            `}
            </style>
        </div>
    )
  }
}