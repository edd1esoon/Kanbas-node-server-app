import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export const findCoursesForEnrolledUser = (userId) => {
  return enrollments.filter((enrollment) => enrollment.userId === userId);
};