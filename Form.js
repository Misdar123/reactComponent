function Form({ open, onOpen }) {
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");

  const [isError, setIsError] = useState({ error: false, message: "" });

  const handleSubmit = () => {
    if (form1.length > 50 || form2.length > 50) {
      setIsError({ error: true, message: "maximum 50 karakter" });
      return;
    }
    if (form1.length === 0 || form2.length === 0) {
      setIsError({ error: true, message: "tidak boleh kosong bangsats" });
      return;
    }

    // write ke data base dobols
    // const path = ``;
    // const data = {
    //   id: Date.now(),
    // };
    // updateDataBase(path, data).then(() => {
    // onOpen(!open);
    // setForm1("");
    // setForm2("");
    // });
    onOpen(!open);
    setForm1("");
    setForm2("");
  };

  const handleOnCancel = () => {
    onOpen(!open);
  };

  return (
    <div>
      <Dialog open={open} onClose={() => onOpen(!open)}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <DialogTitle>Title Form cuks!!!</DialogTitle>
        </Stack>
        <DialogContent>
          <TextField
            error={isError.error}
            helperText={isError.message}
            autoFocus
            margin="dense"
            id="form 1"
            label="form 1"
            type="text"
            fullWidth
            variant="standard"
            value={form1}
            onChange={(e) => {
              setForm1(e.target.value);
              setIsError({ error: false, message: "" });
            }}
          />
          <TextField
            error={isError.error}
            helperText={isError.message}
            autoFocus
            margin="dense"
            id="form 2"
            label="form 2"
            type="text"
            fullWidth
            variant="standard"
            value={form2}
            onChange={(e) => {
              setForm2(e.target.value);
              setIsError({ error: false, message: "" });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Form;
