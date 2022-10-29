import React from "react";
import Image from 'next/image'
export default class Chat extends React.Component {
  constructor(props) {
    // 初始化
    super(props);
    this.state = {
      currentUser: { userId: 1, userName: '保羅', userDesc: '大家好，我是保羅～', messageList: [
        {id: 0, message: '保羅', isSelf: true},
        {id: 1, message: '你好, 我是傑西卡', isSelf: true},
        {id: 2, message: '我喜歡吃的食物有', isSelf: true},
        {id: 3, message: '各種巧克力口味的甜點', isSelf: true},
        {id: 4, message: 'hi 潔西卡', isSelf: false}
      ] },
      showSearch: false,
      showNote: false
    };
  }

  toolClick = (toolName) => {
    const { showSearch, showNote } = this.state;
    if(toolName === 'search') {
      this.setState({showNote: false})
      this.setState({showSearch: !showSearch})
    }else if(toolName === 'note') {
      this.setState({showSearch: false})
      this.setState({showNote: !showNote})
    }
  }
  
  render() {
    const { currentUser, showSearch, showNote } = this.state;
    return (
      <div className="chat">
        <div className="chat-head">
          <div className="user-info">
            <div className="user-img"/>
            {currentUser.userName}
          </div>
          <div className="toolBar">
            <div className={`${showSearch? 'selected': ''} tool-item`} onClick={()=> this.toolClick('search')}>
              <Image src="/images/ic_search.png" alt="search" width="40" height="40" />
            </div>
            <div className={`${showNote? 'selected': ''} tool-item`} onClick={()=> this.toolClick('note')}>
              <Image src="/images/ic_note.png" alt="note" width="40" height="40" />
            </div>
          </div>
        </div>
        <div className="chat-content">
          {currentUser.messageList.reverse().map(item => {
            return (
              <div className={item.isSelf ? 'self-message':'other-message'} key={`message-${item.id}`}>{item.message}</div>
            )
          })}
        </div>
        <div className="chat-footer">
          <div className="input-box">輸入訊息...</div>
          <Image src="/images/ic_sent.png" alt="search" width="40" height="40" />
        </div>
        <style jsx style={scss}>{`
        .chat {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-head {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          box-shadow: 1px 1px 4px#bdbdbd;
        }
        .user-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex: 1;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 4px;
        }
        .user-img {
          border-radius: 50%;
          border: 1px solid #AFEDDF;
          width: 50px;
          height: 50px;
          display: block;
          margin-right: 12px;
        }
        .toolBar {
          display: flex;
        }
        .tool-item {
          border: 1px solid transparent;
          padding: 2px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .selected {
          border-color: #DFDFDF;
          background: #f4f4f4;
        }
        .chat-content {
          flex: 1;
          padding: 0 12px;
          overflow: auto;
          display: flex;
          flex-direction: column-reverse;
          overflow: auto;
        }
        .chat-footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border-top: 1px solid #AFEDDF;
          cursor: pointer;
          user-select: none;
        }
        .input-box {
          flex: 1;
          color: #bdbdbd;
        }
        .self-message {
          padding: 8px 20px;
          width: fit-content;
          background: #4A90E2;
          border-radius: 20px;
          color: #FFF;
          margin: 4px 0 4px auto;
        }
        .other-message {
          padding: 8px 20px;
          width: fit-content;
          margin: 4px auto 4px 0;
          background: #DFDFDF;
          border-radius: 20px;
          color: #000;
        }
        `}</style>
      </div>
    );
  }
}