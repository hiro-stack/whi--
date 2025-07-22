import useSWR from "swr";
import { fetcher } from ".";
import { EmployeeWithSkills } from "../types";
/**
 * スキルや名前などの条件で社員一覧（スキル付き）を取得するAPI
 */
export const useSkillEmployeeList = (
    pageNo: number,
    pageRows: number,
    keywords: string,
    skillId: string,
    skillLevelId: string
) => {
    const { data, isLoading, error } = useSWR<{
        employees: EmployeeWithSkills[];
        totalCount: number;
    }>(
        `skill-management/employee/search?${new URLSearchParams({
            pageNo: pageNo.toString(),
            pageRows: pageRows.toString(),
            keywords: keywords,
            skillId: skillId,
            skillLevelId: skillLevelId,
        }).toString()}`,
        fetcher
    );

    return {
        employees: data?.employees ?? [],
        totalCount: data?.totalCount ?? 0,
        isLoading,
        error,
    };
};
