// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3081;

// // Middleware để parse JSON và cho phép CORS
// app.use(express.json());
// app.use(cors());

// let jobs = [
//   { id: "1", name: "To check email" },
//   { id: "2", name: "UI task web page" },
//   { id: "3", name: "Learn javascript basic" },
//   { id: "4", name: "Learn HTML advance" },
//   { id: "5", name: "Medical app UI" },
//   { id: "6", name: "Learn java" },
// ];

// // Lấy tất cả các jobs
// app.get("/jobs", (req, res) => {
//   res.json(jobs);
// });

// // Tạo một jobs mới
// app.post("/jobs", (req, res) => {
//   const { name } = req.body;
//   const newJob = {
//     id: (jobs.length + 1).toString(), // Tạo id mới dựa trên số lượng jobs hiện tại
//     name,
//   };

//   jobs.push(newJob);
//   res.status(201).json(newJob);
// });

// // Cập nhật một job
// app.put("/jobs/:id", (req, res) => {
//   const { id } = req.params; // Lấy id từ params
//   const { name } = req.body;

//   // Tìm job trong mảng jobs
//   const jobIndex = jobs.findIndex((job) => job.id === id);

//   if (jobIndex !== -1) {
//     // Nếu tìm thấy, cập nhật tên
//     jobs[jobIndex].name = name;
//     res.json(jobs[jobIndex]);
//   } else {
//     // Nếu không tìm thấy, trả về lỗi
//     res.status(404).json({ message: "Job not found" });
//   }
// });

// // Xóa một job
// app.delete("/jobs/:id", (req, res) => {
//   const { id } = req.params; // Lấy id từ params

//   // Tìm job trong mảng jobs
//   const jobIndex = jobs.findIndex((job) => job.id === id);

//   if (jobIndex !== -1) {
//     // Nếu tìm thấy, xóa job
//     jobs.splice(jobIndex, 1);
//     res.status(204).send(); // Trả về 204 No Content
//   } else {
//     // Nếu không tìm thấy, trả về lỗi
//     res.status(404).json({ message: "Job not found" });
//   }
// });

// // Khởi động server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
