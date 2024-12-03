import { Button, Container, Stack } from "react-bootstrap";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import TaskTable from "../components/TaskTable";
import { useState } from "react";
import FormModal from "../components/FormModal";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end my-5">
          <Button>Yeni Gorev Ekle</Button>
        </Stack>

        <TaskTable />
      </Container>

      <FormModal show={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
