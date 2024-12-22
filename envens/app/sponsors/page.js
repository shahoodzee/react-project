import Brand from "@/components/Brand";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Sponsors"} />
      <Brand className="brand-three brand-five" />
    </EnvensLayouts>
  );
};
export default page;
