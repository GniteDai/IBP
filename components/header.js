import React from "react";
const Header = (props) => {
  return (
    <div className="header">
      <span className="title">Cherri Chat</span>
      <div className="language-area">
        { props.languageList.map(language => <div className={props.currentLanguage === language.code ? 'language-item selected' : 'language-item'} key={language.code} onClick={() => props.changeLanguage(language)}>{ language.name }</div>) }
      </div>
      <div className="account-area">
        <div className="account-logo" />
        <div>{props.account.userName}</div>
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

export default Header