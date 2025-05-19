import Link from "next/link";
import Wrapper from "@/layout/wrapper";
import FooterTwo from "@/layout/footers/footer-2";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import HeaderThree from "@/layout/headers/header-3";

export const metadata = {
  title: "Oops! Page Not Found",
};

const NotFound = () => {
  return (
    <Wrapper>
      <div className="page-wrapper">
        
        {/* header area start */}
        <HeaderThree />
        {/* header area end */}

        {/* breadcrumb area start */}
        <Breadcrumb title={"Page Not Found"} subtitle={"404 Error"} />
        {/* breadcrumb area end */}

        {/* error area start*/}
        <section className="error-page text-center py-120 rpy-100">
          <div className="container">
            <div className="error-content">
              <img src="/assets/images/404.png" alt="404 Error" />
              <h2>Oops! page not found.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <Link href="/" className="theme-btn mt-30">
                go back
              </Link>
            </div>
          </div>
        </section>
        {/* error area end*/}
        <FooterTwo />
      </div>
    </Wrapper>
  );
};

export default NotFound;
