import React from "react";
import { Translation } from 'react-i18next';
export default class List extends React.Component {
  constructor(props) {
    // 初始化
    super(props);
    this.state = {
      list: [
        { userId: 1, userName: '保羅', userDesc: '大家好，我是保羅～' },
        { userId: 2, userName: '傑克', userDesc: '大家好，我是傑克～' },
        { userId: 3, userName: '傑森', userDesc: '大家好，我是傑森～' },
      ],
      currentUser: null
    };
  }

  handleClick = (item) => {
    this.setState({currentUser: item})
  };

  handleGGG = (i18n) => {
    i18n.changeLanguage('en')
  }
  
  render() {
    const { currentUser, list } = this.state;
    return (
      <div className="user-list">
        <Translation>{(t, {i18n}) => <div className="title" onClick={() => {this.handleGGG(i18n)}}>{t('FriendsList')}({list.length})</div>}</Translation>
        { 
          list.map(item => {
            return (
              <div className={currentUser && currentUser.userId === item.userId ? 'user-item selected' : 'user-item'} onClick={() => this.handleClick(item)} key={item.userId}>
                <div className="user-logo" />
                <div>
                  <div className="user-name">{item.userName}</div>
                  <div className="user-desc">{item.userDesc}</div>
                </div>
              </div>
            )
          })
        }
        <style jsx style={scss}>{`
        .user-list {
          width: 25%;
          height: 100%;
          box-shadow: 1px 1px 4px #BDBDBD;
        }
        .title {
          border-bottom: 1px solid #AFEDDF;
          padding: 20px;
          font-size: 20px;
        }
        .user-item {
          padding: 20px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #AFEDDF;
          cursor: pointer;
          user-select: none;
        }
        .selected {
          background-color: #F4F4F4;
        }
        .user-logo {
          border-radius: 50%;
          border: 1px solid #AFEDDF;
          width: 50px;
          height: 50px;
          display: block;
          margin-right: 12px;
        }
        .user-name {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 4px;
        }
        .user-desc {
          font-size: 12px;
          color: #BDBDBD;
        }
        `}</style>
      </div>
    );
  }
}