import Layout from "../../components/layout/Layout";
import { EmployeeList } from "../../components/list/EmployeeList";
import { UnsubmitEmployeeList } from "../../components/list/UnsubmitEmployeeList";

export default function AdminSkillSubmitPage() {
    return (
        <Layout
            title="スキルデータ未提出者の一覧を表示するページ"
            explanation="スキルデータ未提出者の一覧を表示し、未提出催促ボタンを押すことができる。"
        >
            <UnsubmitEmployeeList></UnsubmitEmployeeList>
        </Layout>
    );
}
