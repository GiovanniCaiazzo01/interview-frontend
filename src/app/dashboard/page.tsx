import { retriveCourses } from "../api/courses";
import { Card, Navbar } from "../components";

const Dashboard = async () => {
  const courses = await retriveCourses();

  return (
    <>
      <Navbar />
      <div className="pl-20 pr-20">
        <div className="text-gray-700 text-lg font-normal  mb-4">
          Good Morning, Luke
        </div>
        <div className="flex flex-wrap justify-between itemes-center">
          <Card courses={courses} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
