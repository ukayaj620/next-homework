import Head from "next/head";

function Badge({ children }) {
  return (
    <div
      style={{
        padding: "6px 12px",
        margin: "12px",
        borderRadius: "24px",
        border: "1px solid #262626",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </div>
  );
}

function FeatureCard({ imgUrl, title, description }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "496px",
        padding: "32px 24px",
        borderRadius: "48px",
        border: "1px solid #d4d4d4",
        margin: "36px",
      }}
    >
      <img style={{ width: "100%" }} src={imgUrl} />
      <h1
        style={{
          textAlign: "center",
          margin: "32px 0 18px 0",
          fontWeight: "600",
          fontSize: "30px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          lineHeight: "1.75",
          padding: "0 12px",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function RoomLanding() {
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
        <title>WebRoom</title>
      </Head>
      <header
        style={{
          padding: "16px 20px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid #171717",
          position: "sticky",
          top: "0",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ fontWeight: "600" }}>WebRoom</h1>
      </header>
      <div
        style={{
          padding: "16px 32px",
          width: "100%",
          margin: "120px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "700",
            width: "1156px",
            textAlign: "center",
          }}
        >
          The Ultimate Web-based Room Education Platform
        </h1>
        <button
          style={{
            fontSize: "20px",
            padding: "20px 30px",
            borderRadius: "16px",
            marginTop: "48px",
            border: "1px solid #171717",
            backgroundColor: "#171717",
            color: "white",
            cursor: "pointer",
          }}
        >
          Click to Explore More
        </button>
        <div
          style={{
            margin: "80px 0 0 0",
            width: "768px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Badge>🔍 Discover Your Teacher</Badge>
          <Badge>💬 Directly Contact Teacher</Badge>
          <Badge>📈 Industry Leading Human-Resources</Badge>
        </div>
      </div>
      <div
        style={{
          padding: "16px 32px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FeatureCard
          imgUrl="https://creable.com/landing-page/features/campaign_management.png"
          title="First Class WebRoom"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          orci vel sem gravida molestie eu ornare lectus. Quisque eu venenatis
          tellus, ac volutpat felis. Nam nibh ipsum, sollicitudin vestibulum
          pulvinar id.`}
        />
        <FeatureCard
          imgUrl="https://creable.com/landing-page/features/influencer_communication.svg"
          title="Communication Engagement"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          orci vel sem gravida molestie eu ornare lectus. Quisque eu venenatis
          tellus, ac volutpat felis. Nam nibh ipsum, sollicitudin vestibulum
          pulvinar id.`}
        />
      </div>
    </div>
  );
}
