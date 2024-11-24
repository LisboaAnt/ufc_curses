const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
    console.log("Params:", params);
  
    return (
      <div>
        Course Id Page: {params.courseId}
      </div>
    );
  };
  
  export default CourseIdPage;
  