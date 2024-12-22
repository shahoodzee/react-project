import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import dynamic from "next/dynamic";
const Gallary = dynamic(() => import("@/components/Gallary"), {
  ssr: false,
});
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Our Gallery"} />
      <Gallary top={false} className="gallery-page" />
    </EnvensLayouts>
  );
};
export default page;
