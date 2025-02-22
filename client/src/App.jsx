import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./page/student/Home";
import CoursesList from "./page/student/CoursesList";
import CoursesDetails from "./page/student/CoursesDetails";
import MyEnrollments from "./page/student/MyEnrollments";
import Player from "./page/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./page/educator/Educator";
import Dashboard from "./page/educator/Dashboard";
import AddCourse from "./page/educator/AddCourse";
import MyCourses from "./page/educator/MyCourses";
import StudentEnrolled from "./page/educator/StudentEnrolled";
import Navbar from "./components/student/Navbar";
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white ">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
