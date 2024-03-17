function ProfileCard({ imgSrc, name, alias }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px 24px",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "16px 20px",
      }}
    >
      <img style={{ width: "200px", borderRadius: "50%" }} src={imgSrc} />
      <h2 style={{ marginTop: "16px", fontWeight: 500 }}>{name}</h2>
      <p style={{ marginTop: "8px", color: "#5b5b5b", fontStyle: "italic" }}>
        {alias}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          margin: "24px 0",
        }}
      >
        Famous Comedian
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "960px",
        }}
      >
        <ProfileCard
          imgSrc={
            "https://i2-prod.cambridge-news.co.uk/incoming/article23342178.ece/ALTERNATES/s1200c/0_Rowan-Atkinson-interview.jpg"
          }
          name={"Rowan A."}
          alias={"Mr. Bean"}
        />
        <ProfileCard
          imgSrc={
            "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
          }
          name={"James D."}
          alias={"Mr. Beast"}
        />
        <ProfileCard
          imgSrc={
            "https://pbs.twimg.com/profile_images/1434881675255861248/Grx8VDTK_400x400.jpg"
          }
          name={"Nigel Ng"}
          alias={"Uncle Roger"}
        />
        <ProfileCard
          imgSrc={
            "https://hips.hearstapps.com/hmg-prod/images/pewdiepie_gettyimages-501661286.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
          }
          name={"Felix A.U.K"}
          alias={"PewDePie"}
        />
        <ProfileCard
          imgSrc={
            "https://bookingagentinfo.com/wp-content/uploads/2022/09/Ronny-Chieng-1.jpg"
          }
          name={"Xin Yi Chieng"}
          alias={"Ronny C."}
        />
      </div>
    </div>
  );
}
