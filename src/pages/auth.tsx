import { NextPage } from "next/types";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Auth } from "@/components/Page/auth";
import { AppLoading } from "@/components/Element/AppLoading";
import { pagesPath } from "@/lib/$path";
import { authService } from "@/modules/auth/auth.service";

const AuthPage: NextPage = () => {
  const router = useRouter();
  const isSignedIn = authService.isSignedIn();

  useEffect(() => {
    if (isSignedIn) router.push(pagesPath.$url());
  }, []);

  if (isSignedIn) return <AppLoading />;

  return <Auth />;
};

export default AuthPage;
