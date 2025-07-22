import Layout from "../../components/layout/Layout";
import { EmployeeList } from "../../components/list/EmployeeList";
import { AiTrainingSuggestion } from "../../components/trainings/AiTrainingSuggestion";

const AdminEmployeeRecommendPage = () => {
    return (
        <Layout
            title="研修内容推薦機能"
            explanation="AIによって推薦機能を実装しました"
        >
            <AiTrainingSuggestion />
        </Layout>
    );
};

export default AdminEmployeeRecommendPage;
