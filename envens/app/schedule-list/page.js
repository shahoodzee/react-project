import { EventSchedule3, EventSchedule4 } from "@/components/EventSchedule";
import PageBanner from "@/components/PageBanner";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Schedule List"} />
      <EventSchedule3 />
      <EventSchedule4 />
      <TestimonialsSlider />
    </EnvensLayouts>
  );
};
export default page;
