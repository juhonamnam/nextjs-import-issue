/* Switch the order of this two imports, and you get compile error */
import { AuthPage } from "src/components/authPage";
import { HomeView } from "src/components/homeView";
/* Switch the order of this two imports, and you get compile error */

const MainPage = () => {
  return (
    <AuthPage>
      <HomeView />
    </AuthPage>
  );
};

export default MainPage;
