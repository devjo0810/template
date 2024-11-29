export const commonComponents = {
    // Appbar 설정
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => ({
                height: theme.layout.headerHeight,
                minHeight: theme.layout.headerHeight,
            }),
        },
    },
    // Toolbar 설정
    MuiToolbar: {
        styleOverrides: {
            root: ({ theme }) => ({
                minHeight: theme.layout.headerHeight,
                padding: "0 16px",
                [theme.breakpoints.up("sm")]: {
                    minHeight: theme.layout.headerHeight,
                },
            }),
        },
    },
    // Link 설정
    MuiLink: {
        styleOverrides: {
            root: {
                color: "inherit", // 기본 텍스트 색상 상속
                textDecoration: "none", // 밑줄 제거
                "&:hover": {
                    textDecoration: "underline", // 호버 시 밑줄
                },
                "&:visited": {
                    color: "inherit", // 클릭 후 보라색 방지
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "none", // 대문자 방지 (필요 시)
                color: "inherit", // 버튼의 텍스트 색상 초기화
            },
        },
    },
};
