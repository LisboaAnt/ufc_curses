import { FC } from "react";

interface PageProps {
  params: {
    courseId: string;
  };
}

const CourseIdPage: FC<PageProps> = ({ params }) => {
  return <div>Course Id Page: {params.courseId}</div>;
};

export default CourseIdPage;
