import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    // viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect y="286" rx="2" ry="2" width="40" height="10" />
    <rect y="286" rx="2" ry="2" width="100" height="10" />
    <rect width="290" height="250" />
    <rect y="273" rx="0" ry="0" width="40" height="10" />
    <rect y="266" rx="0" ry="0" width="282" height="10" />
  </ContentLoader>
);

export default MyLoader;
