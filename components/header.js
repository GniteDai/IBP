import React from "react";
export default class Header extends React.Component {
  constructor(props) {
    // 初始化
    super(props);
    this.state = {
      currentLanguage: 'zh',
      languageList: [
        { code: 'zh', name: '中文' },
        { code: 'en', name: 'English' },
      ],
      account: {
        userId: 4,
        userName: '潔西卡'
      }
    }
  }

  handleLanguage = (language) => {
    this.setState({currentLanguage: language.code})
  }

  render() {
    const { account, languageList, currentLanguage } = this.state;
    return (
      <div className="header">
        <span className="title">Cherri Chat</span>
        <div className="language-area">
          { languageList.map(language => <div className={currentLanguage === language.code ? 'language-item selected' : 'language-item'} key={language.code} onClick={() => this.handleLanguage(language)}>{ language.name }</div>) }
        </div>
        <div className="account-area">
          <div className="account-logo" />
          <div>{account.userName}</div>
        </div>
        <style jsx style={scss}>{`
          .header {
            width: 100%;
            background-color: #4A90E2;
            display: flex;
            color: #FFF;
            display: flex;
            align-items: center;
          }
          .title {
            padding: 20px;
            font-size: 32px;
          }
          .language-area {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 20px;
          }
          .language-item {
            border: 1px solid #FFF;
            border-radius: 20px;
            padding: 4px 20px;
            text-align: center;
            margin-left: 20px;
            cursor: pointer;
            user-select: none;
          }
          .selected {
            background: #FFF;
            color: #4A90E2;
          }
          .account-area {
            display: flex;
            align-items: center;
            width: fit-content;
            padding: 20px 40px;
            border-left: 1px solid #FFF;
          }
          .account-logo {
            width: 50px;
            height: 50px;
            background-color: #FFF;
            border-radius: 50%;
            margin-right: 20px;
          }
        `}</style>
      </div>
    );
  }
}