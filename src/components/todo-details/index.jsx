import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({
  todoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) {
  return (
    <>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>
          {todoDetails?.todo}
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialog(false);
                setTodoDetails(null);
              }}
            >
              Close
            </Button>
          </DialogActions>
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default TodoDetails;
