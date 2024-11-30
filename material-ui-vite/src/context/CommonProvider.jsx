import React, { createContext, useContext, useState } from "react";
import { Modal, Box, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";

// Modal과 Drawer 상태를 관리할 Context 생성
const CommonContext = createContext();

// Context Provider 컴포넌트
export const CommonProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);  // 모달의 내용
  const [drawerContent, setDrawerContent] = useState(null);  // Drawer의 내용

  const openModal = (content) => {
    setModalContent(content);  // 모달 내용 설정
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const openDrawer = (content) => {
    setDrawerContent(content);  // Drawer 내용 설정
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CommonContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalContent,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        drawerContent,
      }}
    >
      {children}

      {/* 모달과 드로어를 여기에서 직접 렌더링 */}
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              width: 400,
            }}
          >
            {modalContent ? modalContent : <Typography variant="h6">Loading...</Typography>}
          </Box>
        </Modal>
      )}

      {isDrawerOpen && (
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={closeDrawer}
        >
          <List sx={{ width: 250 }}>
            {drawerContent ? drawerContent : <ListItem button><ListItemText primary="Loading..." /></ListItem>}
          </List>
        </Drawer>
      )}
      </CommonContext.Provider>
  );
};

// Context 사용을 위한 custom hook
export const useCommonContext = () => useContext(CommonContext);
