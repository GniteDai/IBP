import React from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});
import CherriChat from '../components/CherriChat'

export default function Home() {
  return (
    <div className="container">
      <CherriChat />
      {/* #4a90e2 */}
      <style jsx style={scss}>{`
        .container {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        #__next {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
