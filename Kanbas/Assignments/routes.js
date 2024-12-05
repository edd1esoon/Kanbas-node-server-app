import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Invalid assignment ID" });
    }

    const assignment = dao.findAssignmentById(id);
    if (!assignment) {
      return res.status(404).json({ error: "Assignment not found" });
    }

    res.status(200).json(assignment);
  });

  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:id", (req, res) => {
    const updatedAssignment = dao.updateAssignment(req.params.id, req.body);
    res.json(updatedAssignment);
  });

  app.delete("/api/assignments/:id", (req, res) => {
    dao.deleteAssignment(req.params.id);
    res.sendStatus(200);
  });
}
