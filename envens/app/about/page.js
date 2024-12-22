import AboutUs from "@/components/AboutUs";
import NextEvent from "@/components/NextEvent";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"About Us"} />
      <AboutUs />
      <NextEvent />
      <Team />
      <TestimonialsSlider />
    </EnvensLayouts>
  );
};
export default page;
