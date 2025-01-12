import Meta from "./Meta";

const Layout = ({ children, meta }) => (
  <>
    <Meta {...meta} />
    <main>{children}</main>
  </>
);

export default Layout;
