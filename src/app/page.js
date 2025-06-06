import Hero from "@/components/Hero";
import JobCategories from "@/components/JobCategories";
import PopularJobs from "@/components/PopularJobs";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularJobs/>
      <JobCategories />
    </main>
  );
}

