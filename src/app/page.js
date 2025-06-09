import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import PopularJobs from "@/components/PopularJobs";
import PostJob from "@/components/PostJob";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularJobs/>
      <JobCategories />
      <PostJob/>
      
    </main>
  );
}

