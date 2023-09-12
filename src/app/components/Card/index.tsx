import { ICourse } from "@/app/interfaces";

interface CardProps {
  courses: ICourse[];
}

const Card = ({ courses }: CardProps) => {
  return (
    <>
      {courses.map((course) => (
        <div
          key={course.title}
          className="flex flex-col h-354 min-w-400 max-w-400  mb-6"
        >
          <div
            className="flex flex-col  rounded-2xl h-screen"
            style={{
              backgroundImage: `url(${course.thumbnail})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div
              className="w-full h-full  p-3  rounded-2xl"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <div className="w-fit pl-2 pr-2 pt-05 pb-05  text-red-700 bg-rose-50 rounded">
                New!
              </div>
              <div className="flex flex-col  justify-center items-center h-5/6">
                <div className="text-gray-300 font-xs font-normal">
                  {course.softwareTool.title}
                </div>
                <div className="text-white font-extrabold text-base leading-7 tracking-widest">
                  {course.keyword.toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pr-4 mt-3">
            <div className="mb-2 text-sm text-gray-500">
              {course.language} · {course.difficulty} · {course.introLength}m
            </div>
            <div className="mb-2 text-base text-grey-700 font-medium leading-6">
              {course.title}
            </div>
            <div className="text-sm text-gray-500">{course.tutor.name}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
