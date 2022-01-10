import SidebarComponent from './../Components/SidebarComponent/SidebarComponent'

const MainLayout = ({ children }) => (
  <div>
    <SidebarComponent />
    <p>I am layout</p>
    {children}
  </div>
)

const withMainLayout = (Component) => (props) =>
(
  <MainLayout>
    <Component {...props} />
  </MainLayout>
);

export default withMainLayout;