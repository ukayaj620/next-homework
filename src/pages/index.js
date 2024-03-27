import NextLink from "next/link";

const Link = ({ url, children }) => {
  return <NextLink href={url}>{children}</NextLink>;
};

export default function Index() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link url="./room-landing">WebRoom Landing</Link>
      <Link url="./comedian">Famous Comedian</Link>
    </div>
  );
}
