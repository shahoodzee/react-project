import { EventSchedule2 } from "@/components/EventSchedule";
import PageBanner from "@/components/PageBanner";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Schedule List 2"} />
      <EventSchedule2 />
      <TestimonialsSlider />
    </EnvensLayouts>
  );
};
export default page;
