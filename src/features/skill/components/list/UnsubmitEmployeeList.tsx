import { Stack } from "@mui/material";
import { useState } from "react";
import { useSkillEmployeeList } from "../../api/useSkillEmployeeList";
import { EmployeeListContent } from "./ErrorEmployeeListContent";

export const UnsubmitEmployeeList = () => {
    const [pageNo] = useState<number>(1);
    const [pageRows] = useState<number>(1000);
    const [searchWord] = useState<string>("");
    const [skillId] = useState<string>("");
    const [skillLevelId] = useState<string>("");

    // スキル付き社員データを取得
    const { employees, error, isLoading } = useSkillEmployeeList(
        pageNo,
        pageRows,
        searchWord,
        skillId,
        skillLevelId,
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    // スキル未入力の社員のみを抽出（skills が空配列や空文字など）
    const unsubmittedEmployees = employees.filter(
        (emp) =>
            !emp.skills || // undefined/null
            (Array.isArray(emp.skills) && emp.skills.length === 0) || // 配列型
            (typeof emp.skills === "string" && emp.skills.trim() === ""), // 文字列型
    );

    if (unsubmittedEmployees.length === 0) {
        return <div>未提出者はいません。</div>;
    }

    return (
        <Stack direction="column" gap={4} height="100%" minHeight="500px">
            <EmployeeListContent employees={unsubmittedEmployees} />
        </Stack>
    );
};
