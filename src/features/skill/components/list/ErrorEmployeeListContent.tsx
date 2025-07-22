import React, { useState } from "react";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EmployeeWithSkills } from "../../types";
const cellStyle = {
  maxWidth: "0px",
  overflow: "hidden",
  textOverflow: "ellipsis",//未提出のやつ
  whiteSpace: "nowrap",
};
const bodyRowStyle = {
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
  cursor: "pointer",
};
interface Props {
  employees: EmployeeWithSkills[] | undefined;
}
/**
 * 社員一覧のリスト表示 + 通知ボタン付き
 */
export const EmployeeListContent = ({ employees }: Props) => {
  const navigate = useNavigate();
  // 通知状態を empId ごとに管理
  const [notifiedMap, setNotifiedMap] = useState<{ [empId: number]: boolean }>({});
  const handleNotify = (empId: number) => {
    // 通知APIなどがあればここに呼び出し処理を追加
    setNotifiedMap((prev) => ({
      ...prev,
      [empId]: true,
    }));
  };
  return (
    <Stack height="100%">
      <TableContainer component={Paper} variant="outlined" sx={{ height: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle} width="1%">
                社員ID
              </TableCell>
              <TableCell sx={cellStyle} width="20%">
                社員名称
              </TableCell>
              <TableCell sx={cellStyle} width="15%">
                所属
              </TableCell>
              <TableCell sx={cellStyle} width="50%">
                スキル
              </TableCell>
              <TableCell sx={cellStyle} width="14%">
                通知
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((emp) => {
              const notified = notifiedMap[emp.empId] ?? false;
              return (
                <TableRow
                  key={emp.empId}
                  sx={bodyRowStyle}
                  onClick={() => navigate(`/admin/skill/detail/${emp.empId}`)}
                >
                  <TableCell sx={cellStyle}>{emp.empId}</TableCell>
                  <TableCell sx={cellStyle}>{emp.empName}</TableCell>
                  <TableCell sx={cellStyle}>{emp.department}</TableCell>
                  <TableCell sx={cellStyle}>{emp.skills}</TableCell>
                  <TableCell
                    sx={cellStyle}
                    onClick={(e) => e.stopPropagation()} // ボタン押下で行クリックを無効化
                  >
                    <Button
                      variant="contained"
                      color={notified ? "success" : "primary"}
                      size="small"
                      onClick={() => handleNotify(emp.empId)}
                    >
                      {notified ? "通知済み" : "通知を送る"}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};