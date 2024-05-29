import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Slider,
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router'; // useRouterをインポート
import React, { useEffect, useState } from 'react';

import AdditionalSurveyQuestionBox from '@/components/molecules/survey/AdditionalSurveyQuestionBox';
import SurveyQuestionBox from '@/components/molecules/survey/SurveyQuestionBox';
import axios from '@/lib/axios';
import useCustomSWR from '@/lib/useCustomSWR';
import theme from '@/theme/scheme';

const MainSurvey = () => {
  const router = useRouter(); // useRouterを使用してクエリパラメータを取得
  const { employee_id, survey_term_id, survey_category_id } = router.query; // クエリパラメータを取得

  const url_questions = `/survey-questions/${survey_term_id}`;
  const {
    data: question,
    isLoading: questionIsLoading,
    isError: questionIsError,
  } = useCustomSWR(url_questions);

  const url_departments = `/company_departments/${survey_category_id}`;
  const {
    data: department,
    isLoading: departmentIsLoading,
    isError: departmentIsError,
  } = useCustomSWR(url_departments);

  const [eNPS, setENPS] = useState('5');
  const [gender, setGender] = useState('');
  const [years_of_service, setYears_of_service] = useState('');
  const [age, setAge] = useState('');
  const [freeDescription, setFreeDescription] = useState('');
  const [answers, setAnswers] = useState([]);
  const [additionalAnswers, setAdditionalAnswers] = useState([]);
  const [mainSurveyQuestions, setMainSurveyQuestions] = useState([]);
  const [monthlySurveyQuestions, setMonthlySurveyQuestions] = useState([]);
  const [eNPSQuestions, setENPSQuestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [departmentId, setDepartmentId] = useState('');

  const valuetext = (value) => {
    return `${value}`;
  };

  const handleENPSChange = (event, enps) => {
    setENPS(enps);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleYears_of_serviceChange = (event) => {
    setYears_of_service(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartmentId(event.target.value);
  };

  const handleAnswerChange = (question_content_id, answer, survey_term_id) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question_content_id, answer, survey_term_id },
    ]);
  };

  const handleAdditionalAnswerChange = (
    question_content_id,
    additionalAnswer,
    survey_term_id,
  ) => {
    setAdditionalAnswers((prevAnswers) => [
      ...prevAnswers,
      { question_content_id, additionalAnswer, survey_term_id },
    ]);
  };

  const handleFreeDescriptionChange = (event) => {
    setFreeDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      // メインサーベイの回答を送信
      await InsertMainSurveyAnswers();

      // 送信後の処理を記述する場合はここに追加
    } catch (error) {
      console.error('フォームの送信中にエラーが発生しました:', error);
      // エラーを適切に処理する
    } finally {
      setIsSubmitting(false);
    }
  };

  // 入力情報をDBに登録する。
  const InsertMainSurveyAnswers = async () => {
    const formattedAnswers = answers.map((item) => ({
      question_content_id: item.question_content_id,
      answer: item.answer,
      survey_term_id: item.survey_term_id,
    }));
    // question_id が 33 の場合、ENPS の情報を追加
    if (question.data.some((question) => question.survey_question_id === 33)) {
      // ENPS の question_content_id を取得
      const enpsQuestionContentId = question.data.find(
        (question) => question.survey_question_id === 33,
      ).question_content_id;
      // ENPS の情報を追加
      formattedAnswers.push({
        question_content_id: enpsQuestionContentId,
        answer: eNPS,
        survey_term_id,
      });
    }
    // その他の追加質問の情報を追加
    const formattedAdditionalAnswers = additionalAnswers.map((item) => ({
      question_content_id: item.question_content_id,
      answer: item.additionalAnswer,
      survey_term_id: item.survey_term_id,
    }));
    try {
      const response = await axios.post('/api/survey_main_answers', {
        employee_id,
        survey_term_id,
        department_id: departmentId,
        gender,
        years_of_service,
        age,
        answers: formattedAnswers,
        additionalAnswers: formattedAdditionalAnswers,
        free_description: freeDescription,
      });
      console.log('Answers Inserted', response.data);
      // 登録後の遷移などの処理を行う場合はここに記述します
      router.push('/survey/thanks');
    } catch (error) {
      console.error('回答の登録に失敗しました:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (question && question.data) {
      setMainSurveyQuestions(question.data.slice(0, 32));
      setMonthlySurveyQuestions(question.data.slice(33, 35));
      setENPSQuestions(question.data.slice(32, 33));
    }
  }, [question]);

  if (questionIsLoading || departmentIsLoading)
    return <div>ローディング中</div>;
  if (questionIsError || departmentIsError)
    return <div>エラーが発生しました</div>;

  return (
    <>
      <Head>Gajup! | メインアンケート</Head>
      <Box
        sx={{
          paddingBottom: '50px',
        }}
      >
        {/* 質問の意義セクション */}
        <Box
          sx={{
            backgroundColor: '#14B8A6',
            color: '#fff',
          }}
        >
          <Box
            sx={{
              padding: '20px 10%',
            }}
          >
            <h1>企業診断定期アンケート</h1>
            <br />
            <h2>なぜ企業診断アンケートを行うのか</h2>
            <p className="text-xs">
              A.
              アンケートを通じて社員の皆様がより一層自己実現のできる会社組織に変えるため実施しております。半期に一度実施することで企業がどれほど成長しているのか、他社と比較することで自社の立ち位置はどこなのか、問題点を洗い出すことが可能です。
            </p>
            <br />
            <h2>実施時間は？</h2>
            <p>A.約20分を想定しております。</p>
          </Box>
        </Box>

        {/* アンケート開始 */}
        <Box
          sx={{
            padding: '0 10%',
            textAlign: 'center',
            '@media screen and (min-width:600px)': {
              padding: '0 20%',
            },
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              fontSize: '20px',
            }}
          >
            以下の情報を入力してください。
          </Box>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                paddingBottom: '40px',
              }}
            >
              以下の情報は匿名化されたのち統計データとして利用する目的で使用されます。
            </Box>
            {/* 性別選択 */}
            <Box
              sx={{
                fontFamily: 'bold',
              }}
            >
              性別
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p>
                男性
                <Radio
                  onClick={handleGenderChange}
                  value="0"
                  checked={gender === '0'}
                ></Radio>
              </p>
              <p>
                <Radio
                  onClick={handleGenderChange}
                  value="1"
                  checked={gender === '1'}
                ></Radio>
                女性
              </p>
            </Box>
            {/* 部署選択 */}
            <Box
              sx={{
                '@media screen and (min-width:600px)': {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '30px',
                },
              }}
            >
              {/* 入社歴 */}
              <Box>入社歴</Box>
              <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="years_of_service-label">入社歴</InputLabel>
                <Select
                  labelId="years_of_service-label"
                  id="years_of_service"
                  value={years_of_service}
                  label="years_of_service"
                  onChange={handleYears_of_serviceChange}
                >
                  <MenuItem value="">選択してください</MenuItem>
                  <MenuItem value="0">1年目</MenuItem>
                  <MenuItem value="1">2～4年目 </MenuItem>
                  <MenuItem value="2">5~9年目</MenuItem>
                  <MenuItem value="3">10~14年目</MenuItem>
                  <MenuItem value="4">15~19年目</MenuItem>
                  <MenuItem value="5">20~24年目</MenuItem>
                  <MenuItem value="6">25~29年目</MenuItem>
                  <MenuItem value="7">30~40年目</MenuItem>
                  <MenuItem value="8">40年目以上</MenuItem>
                </Select>
              </FormControl>

              {/* 年代 */}
              <Box>年代</Box>
              <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="age-label">年代</InputLabel>
                <Select
                  labelId="age-label"
                  id="age"
                  value={age}
                  label="age"
                  onChange={handleAgeChange}
                >
                  <MenuItem value="">選択してください</MenuItem>
                  <MenuItem value="0">20代</MenuItem>
                  <MenuItem value="1">30代</MenuItem>
                  <MenuItem value="2">40代</MenuItem>
                  <MenuItem value="3">50代</MenuItem>
                  <MenuItem value="4">60代</MenuItem>
                  <MenuItem value="5">70代</MenuItem>
                </Select>
              </FormControl>

              {/* 部署 */}
              <Box>部署</Box>
              <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="department-label">年代</InputLabel>
                <Select
                  labelId="department-label"
                  id="department"
                  value={departmentId}
                  label="department"
                  onChange={handleDepartmentChange}
                >
                  <MenuItem value="">選択してください</MenuItem>
                  {department.data.map((item) => (
                    <MenuItem
                      key={item.department_id}
                      value={item.department_id}
                    >
                      {item.department_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* アンケート回答 */}
            <Box
              sx={{
                color: '#14B8A6',
                borderBottom: '1px solid #000',
                paddingBottom: '10px',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {/* eNPS */}
              <Box>
                <Box
                  sx={{
                    textAlign: 'left',
                  }}
                >
                  eNPSに関するアンケート
                </Box>
                <Box
                  sx={{
                    color: '#14B8A6',
                    borderBottom: '1px solid #000',
                    paddingBottom: '10px',
                    marginBottom: '20px',
                    textAlign: 'center',
                  }}
                >
                  {/* 質問 */}
                  <Box>
                    Q1:
                    あなたは現在の職場を親しい友人や知人にどの程度おすすめしたいと思いますか？
                  </Box>
                  <Box
                    sx={{
                      // display:'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* スライダー */}
                    <Box
                      sx={{
                        width: '70%',
                        margin: '0 auto',
                      }}
                    >
                      <Box sx={{ justifyContent: 'center' }}>
                        <Slider
                          aria-label="Temperature"
                          onChange={handleENPSChange}
                          defaultValue={5}
                          getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          shiftStep={1}
                          step={1}
                          marks
                          min={0}
                          max={10}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box
                        sx={{
                          width: '80px',
                          '@media screen and (max-width:600px)': {
                            fontSize: '10px',
                            width: '50px',
                          },
                        }}
                      >
                        お勧めしない
                      </Box>

                      <Box
                        sx={{
                          width: '80px',
                          '@media screen and (max-width:600px)': {
                            fontSize: '10px',
                            width: '50px',
                          },
                        }}
                      >
                        お勧めしたい
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    textAlign: 'left',
                  }}
                >
                  常設アンケート
                </Box>
                {monthlySurveyQuestions.map((item, index) => (
                  <AdditionalSurveyQuestionBox
                    key={item.survey_question_id}
                    questionNumber={index + 1}
                    question={item.question}
                    handleChange={(additionalAnswer) =>
                      handleAdditionalAnswerChange(
                        item.question_content_id,
                        additionalAnswer,
                        item.survey_term_id,
                      )
                    }
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                color: '#14B8A6',
                paddingBottom: '10px',
                marginBottom: '20px',
                borderBottom: '1px solid #000',
                textAlign: 'center', // 質問文を中央に配置
              }}
            >
              {mainSurveyQuestions.map((item, index) => (
                <SurveyQuestionBox
                  key={item.survey_question_id}
                  questionNumber={index + 1}
                  question={item.question}
                  handleChange={(answer) =>
                    handleAnswerChange(
                      item.question_content_id,
                      answer,
                      item.survey_term_id,
                    )
                  }
                />
              ))}
            </Box>

            {/* 自由記述欄 */}
            <Box>
              <Box
                sx={{
                  textAlign: 'left',
                }}
              >
                自由記述欄（任意）
              </Box>
              <Box>
                <textarea
                  rows="3"
                  style={{
                    width: '300px', // 幅
                    height: '100px', // 高さ
                    padding: '10px',
                    border: '2px solid black', // 黒い枠線
                    borderRadius: '5px', // 角丸
                    resize: 'none', // リサイズ不可
                    outline: 'none', // アウトラインを非表示
                  }}
                  onChange={handleFreeDescriptionChange}
                ></textarea>
              </Box>
            </Box>
            {/* 送信ボタン */}
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                variant="contained"
                onClick={handleSubmit}
                type="submit"
                disabled={isSubmitting} // 送信中の間はボタンを無効化
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  ':hover': {
                    background: 'theme.palette.primary.main',
                    color: '#fff',
                  },
                }}
              >
                {isSubmitting ? '送信中...' : '送信'}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default MainSurvey;
