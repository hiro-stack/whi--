import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EmployeeWithSkills } from "../../types";


const cellStyle = {
  maxWidth: "0px",
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const bodyRowStyle = {
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  cursor: 'pointer',
};

interface Props {
  employees: EmployeeWithSkills[] | undefined;
}
/**
 * 社員一覧のリスト表示
 * @returns 
 */
export const EmployeeListContent = ({ employees }: Props) => {
  const navigate = useNavigate();
  return (
    <Stack height="100%">
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{
          height: '100%',
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={ cellStyle } width="15%">社員ID</TableCell>
              <TableCell sx={ cellStyle } width="20%">社員名称</TableCell>
              <TableCell sx={ cellStyle } width="15%">所属</TableCell>
              <TableCell sx={ cellStyle } width="50%">スキル</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees ? employees.map(emp => (
              <TableRow key={emp.empId} sx={ bodyRowStyle } onClick={() => navigate(`/admin/skill/detail/${emp.empId}`)}>
                <TableCell sx={ cellStyle }>{emp.empId}</TableCell>
                <TableCell sx={ cellStyle }>{emp.empName}</TableCell>
                <TableCell sx={ cellStyle }>{emp.department}</TableCell>
                <TableCell sx={ cellStyle }>{emp.skills}</TableCell>
              </TableRow>
            )) : (<></>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}
