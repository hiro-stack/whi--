import { useState } from "react";
import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
// スキル一覧（例として追加済み）
const skillOptions = [
  "ヒアリング",
  "合意形成",
  "業務分析",
  "批判的思考",
  "分析",
  "ドキュメント整理",
  "アーキテクチャ設計",
  "モデリング設計",
  "UIUX設計",
  "データベース設計",
  "インターフェース設計",
  "セキュリティ設計",
  "プログラミング言語理解",
  "データ構造とアルゴリズム",
  "ソフトウェア設計パターン",
  "コードレビュー",
  "パフォーマンス最適化",
  "テストケース設計",
  "テスト自動化",
  "パフォーマンステスト",
  "セキュリティテスト",
  "テスト結果解析",
  "システム監視",
  "パフォーマンスモニタリング",
  "インシデント管理",
  "コミュニケーション",
  "説明力",
  "ロジカルシンキング",
  "発想力",
  "情報収集力",
  "ITリテラシー"
];
const levelOptions = ["初級", "中級", "上級", "専門"];
export const AiTrainingSuggestion = () => {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [result, setResult] = useState("");
  const handleGenerate = () => {
    if (!skill || !level) {
      setResult("スキルとレベルを選択してください。");
      return;
    }
    // 仮の提案文（将来的にChatGPT APIと連携も可能）
    setResult(
      `${skill}（${level}）向けの研修メニュー:\n` +
        `・${skill}の基礎理論と応用講義\n` +
        `・実践的なケーススタディと演習\n` +
        `・${level === "専門" ? "専門家向け" : "業務応用レベル"}のOJTシミュレーション`
    );
  };
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">AI研修提案ジェネレーター</Typography>
      <Stack spacing={2} mt={2}>
        <FormControl fullWidth>
          <InputLabel>スキル</InputLabel>
          <Select
            value={skill}
            label="スキル"
            onChange={(e) => setSkill(e.target.value)}
          >
            {skillOptions.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>習得レベル</InputLabel>
          <Select
            value={level}
            label="習得レベル"
            onChange={(e) => setLevel(e.target.value)}
          >
            {levelOptions.map((l) => (
              <MenuItem key={l} value={l}>
                {l}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleGenerate}>
          研修メニューを生成
        </Button>
        {result && <Typography whiteSpace="pre-line">{result}</Typography>}
      </Stack>
    </Paper>
  );
};