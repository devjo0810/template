import { Button, Divider } from "@mui/material";
import { useCommonContext } from "@/context/CommonProvider";

const Dashboard = () => {
  const { openModal, openDrawer } = useCommonContext();

    // 동적으로 전달할 내용
    const modalContent = <div><h2>This is a custom modal!</h2><p>Modal content goes here.</p></div>;
    const drawerContent = (
      <div>
        <h3>Drawer Menu</h3>
        <Button>Item 1</Button>
        <Button>Item 2</Button>
        <Button>Item 3</Button>
      </div>
    );

  return (
    <>
        <Button color="primary" size="large">Dashboard</Button>
        <Button color="secondary" size="large">Dashboard</Button>
        <Button color="error" size="large">Dashboard</Button>
        <Button color="warning" size="large">Dashboard</Button>
        <Button color="info" size="large">Dashboard</Button>
        <Button color="success" size="large">Dashboard</Button>
        <Button color="white" size="large">Dashboard</Button>
        <Divider />
        <Button color="primary" variant="contained">Dashboard</Button>
        <Button color="secondary" variant="contained">Dashboard</Button>
        <Button color="error" variant="contained">Dashboard</Button>
        <Button color="warning" variant="contained">Dashboard</Button>
        <Button color="info" variant="contained">Dashboard</Button>
        <Button color="success" variant="contained">Dashboard</Button>
        <Button color="white" variant="contained">Dashboard</Button>
        <Divider />
        <Button color="primary" variant="outlined" size="small">Dashboard</Button>
        <Button color="secondary" variant="outlined" size="small">Dashboard</Button>
        <Button color="error" variant="outlined" size="small">Dashboard</Button>
        <Button color="warning" variant="outlined" size="small">Dashboard</Button>
        <Button color="info" variant="outlined" size="small">Dashboard</Button>
        <Button color="success" variant="outlined" size="small">Dashboard</Button>
        <Button color="white" variant="outlined" size="small">Dashboard</Button>
        <Divider />
        <Button color="primary" variant="contained" size="small">Dashboard</Button>
        <Button color="secondary" variant="contained" size="small">Dashboard</Button>
        <Button color="error" variant="contained" size="small">Dashboard</Button>
        <Button color="warning" variant="contained" size="small">Dashboard</Button>
        <Button color="info" variant="contained" size="small" onClick={() => openModal(modalContent)}>Dashboard</Button>
        <Button color="success" variant="contained" size="small" onClick={() => openDrawer(drawerContent)}>Dashboard</Button>
        <Button color="white" variant="contained" size="small">Dashboard</Button>
    </>
  );
};

export default Dashboard;
