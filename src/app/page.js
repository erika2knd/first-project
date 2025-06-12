import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import PopularJobs from "@/components/PopularJobs";
import PostJob from "@/components/PostJob";
import Feedback from "@/components/Feedback";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularJobs/>
      <JobCategories />
      <PostJob/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
      
    </main>
  );
}

