import React from "react";
import { useTranslation } from 'next-i18next';

const List = (props) => {
  const { t } = useTranslation();
  return (
    <div className="user-list">
      <div className="title">{t('FriendsList')}({props.list.length})</div>
      { 
        props.list.map(item => {
          return (
            <div className={props.currentUser && props.currentUser.userId === item.userId ? 'user-item selected' : 'user-item'} onClick={() => props.changeUser(item)} key={item.userId}>
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

export default List;