import Head from "next/head";
import { useState } from "react";

const menuTabs = [
  {
    title: "Profile",
    description: "The page your profile page",
  },
  {
    title: "About Me",
    description: "This page is telling about your self",
  },
];

const TabButton = ({ isActive, onClick, children }) => {
  return (
    <div
      style={{
        padding: "12px 16px",
        margin: "16px",
        backgroundColor: "#171717",
        color: "white",
        outline: isActive ? "2px solid goldenrod" : "",
        outlineOffset: 3,
        borderRadius: "12px",
        width: "100%",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const TabContent = ({ isShow, tabInfo, children }) => {
  return isShow ? (
    <div
      style={{
        width: "100%",
        margin: "16px",
      }}
    >
      <h1>{tabInfo.title}</h1>
      <p style={{ marginTop: "8px" }}>{tabInfo.description}</p>
      <div style={{ margin: "32px 0" }}>{children}</div>
    </div>
  ) : null;
};

const TabPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderMenuTabs = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {menuTabs.map(({ title }, index) => {
          return (
            <TabButton
              isActive={activeTab === index}
              key={`#menu-${title}-${index}`}
              onClick={() => setActiveTab(index)}
            >
              {title}
            </TabButton>
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: "#171717",
      }}
    >
      <Head>
        <title>Tab Menu</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "720px",
          width: "100%",
        }}
      >
        {renderMenuTabs()}
        <TabContent isShow={activeTab === 0} tabInfo={menuTabs[activeTab]}>
          <div>
            <img
              style={{
                width: "240px",
                height: "240px",
                outline: "2px solid black",
                outlineOffset: "2px",
                borderRadius: "16px",
              }}
              src="https://pbs.twimg.com/profile_images/1434881675255861248/Grx8VDTK_400x400.jpg"
            />
            <h2 style={{ marginTop: "12px" }}>Uncle Roger</h2>
          </div>
        </TabContent>
        <TabContent isShow={activeTab === 1} tabInfo={menuTabs[activeTab]}>
          <h2>Uncle Roger</h2>
          <p style={{ marginTop: "12px", lineHeight: "2" }}>
            Nigel Ng Kin-ju[a] (/ʌŋ/ UNG; born 1990/1991) is a Malaysian
            comedian and YouTuber. He is best known for co-creating (alongside
            Evelyn Mok) and portraying Uncle Roger, a character representing a
            middle-aged Asian uncle with an exaggerated Cantonese accent who is
            usually seen aggressively critiquing people&apos;s attempts at
            cooking Asian food.
          </p>
        </TabContent>
      </div>
    </div>
  );
};

export default TabPage;
