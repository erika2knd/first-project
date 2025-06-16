import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import PopularJobs from "@/components/PopularJobs";
import PostJob from "@/components/PostJob";
import Feedback from "@/components/Feedback";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import SearchPage from "@/components/SearchPage";

export default function Home() {
  return (
    <main>
      <SearchPage/>
      <PopularJobs/>
      <JobCategories />
      <PostJob/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
      
      
    </main>
  );
}

