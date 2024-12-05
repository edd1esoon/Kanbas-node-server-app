import db from "../Database/index.js";
let { assignments } = db;

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  assignments = [...assignments, newAssignment];
  return newAssignment;
};

export const findAssignments = () => assignments;

export const findAssignmentById = (assignmentId) => {
  console.log("Looking for assignment with ID:", assignmentId);
  if (!assignmentId) {
    console.error("Invalid assignment ID");
    return null;
  }
  return assignments.find((a) => a._id === assignmentId) || null;
};


export const updateAssignment = (assignmentId, assignment) => {
  assignments = assignments.map((a) =>
    a._id === assignmentId ? { ...a, ...assignment } : a
  );
  return assignments.find((a) => a._id === assignmentId);
};

export const deleteAssignment = (assignmentId) => {
  assignments = assignments.filter((a) => a._id !== assignmentId);
};
