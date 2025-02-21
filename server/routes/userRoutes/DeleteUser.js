import express from "express";
const router = express.Router();
router.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const deleteProductDb = "DELETE FROM user WHERE id = ?";

  databaseConnaction.query(deleteProductDb, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      id: id,
    });
  });
});
export default router;
