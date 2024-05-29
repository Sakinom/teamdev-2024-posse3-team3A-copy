<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GoalController;
use App\Http\Controllers\Api\PlanController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\ChartController;
use App\Http\Controllers\Api\RecordController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\SurveyController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ComparisonController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\SurveyTermController;
use App\Http\Controllers\Api\EmployeeCSVController;
use App\Http\Controllers\Api\MonthlyChartController;
use App\Http\Controllers\Api\MonthlySurveyController;
use App\Http\Controllers\Api\SurveyContentController;
use App\Http\Controllers\Api\SurveyCategoryController;
use App\Http\Controllers\Api\SurveyQuestionController;
use App\Http\Controllers\Api\SurveyMainAnswerController;
use App\Http\Controllers\Api\SurveyMonthlyAnswerController;
use App\Http\Controllers\Api\SurveyPersonalAnswerController;
use App\Http\Controllers\Api\SurveyQuestionCategoryController;
use App\Http\Controllers\Api\SurveyDescriptionAnswerController;
use App\Http\Controllers\Api\InvitationController;
use App\Http\Controllers\Api\MonthlyDateController;
use App\Http\Controllers\Api\CreateMonthlySurveyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum', 'verified'])->get('/user', function (Request $request) {
    return $request->user();
});

// ログインと新規登録のルーティング
Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

// 登録招待メール送信のルーティング
Route::post('/send-invitation-email', [InvitationController::class, 'sendInvitationEmail']);

// CRUDのルーティング
Route::apiResource('companies', CompanyController::class);
Route::apiResource('employees', EmployeeController::class);
Route::apiResource('admins', AdminController::class);
Route::apiResource('departments', DepartmentController::class);
Route::apiResource('survey_categories', SurveyCategoryController::class);
Route::apiResource('survey_terms', SurveyTermController::class);
Route::apiResource('survey_contents', SurveyContentController::class);
Route::apiResource('survey_personal_answers', SurveyPersonalAnswerController::class);
Route::apiResource('survey_main_answers', SurveyMainAnswerController::class);
Route::apiResource('survey_monthly_answers', SurveyMonthlyAnswerController::class);
Route::apiResource('survey_description_answers', SurveyDescriptionAnswerController::class);
Route::apiResource('survey_questions', SurveyQuestionController::class);
Route::apiResource('survey_question_categories', SurveyQuestionCategoryController::class);
Route::apiResource('reports', ReportController::class);
Route::apiResource('plans', PlanController::class);
Route::apiResource('goals', GoalController::class);
Route::post('/user', function (Request $request) {
    return $request->user();
});


Route::get('companies/{company_id}/departments', [DepartmentController::class, 'departmentsPerCompany']);
Route::get('company_departments/{survey_category_id}', [DepartmentController::class, 'departmentsPerCompanyFromSurveyCategoryId']);

// csvのテンプレートダウンロード
Route::get('/csv-template', [EmployeeCSVController::class, 'downloadCsvTemplate']);

// 従業員をcsvで登録
Route::post('/csv-import', [EmployeeCSVController::class, 'importCsv']);

// 回答率取得（後からカルテ概要情報取得にする）
Route::get('records/info/{survey_term_id}', [RecordController::class, 'responseRatio']);
// カルテ一覧取得
Route::get('records/{company_id}', [RecordController::class, 'recordList']);

// カルテの良い点・悪い点取得
Route::get('summaries/{survey_term_id}', [RecordController::class, 'recordSummary']);

// カルテのコメント一覧取得
Route::get('comments/{survey_term_id}', [CommentController::class, 'commentList']);

// ダッシュボードのデータ取得
Route::get('dashboard/{company_id}', [DashboardController::class, 'dashboardData']);

// マンスリーアンケート一覧取得
Route::get('monthly-surveys/{company_id}', [MonthlySurveyController::class, 'monthlySurveyList']);

// アンケート設問取得
Route::get('survey-questions/{survey_term_id}', [SurveyController::class, 'surveyQuestions']);

// カルテの施策取得
Route::get('records/plans/{survey_term_id}', [RecordController::class, 'recordPlan']);

// グラフの表示
Route::prefix('charts')->group(function () {
    // eNPSの推移
    Route::get('enps/transition/{survey_term_id}', [ChartController::class, 'enpsTransition']);
    // eNPSの割合
    Route::get('enps/pie/{survey_term_id}', [ChartController::class, 'enpsRatio']);
    // 16の設問項目の総合点の推移
    Route::get('question_category/transition/{survey_term_id}', [ChartController::class, 'questionCategoryTransition']);
    // ①と②の総合平均の推移
    Route::get('question-type/transition/{survey_term_id}', [ChartController::class, 'questionTypeTransition']);
    // 32の設問項目の回答分布
    Route::get('question/ratio/{survey_term_id}/{question_category_id}', [ChartController::class, 'questionRatio']);
    // 16の設問項目と属性の相関ヒートマップ
    Route::get('attribute/heatmap/{survey_term_id}', [ChartController::class, 'attributeHeatmap']);
    // 前回比・他社比の相関ヒートマップ
    Route::get('previous-category/comparison/{survey_term_id}', [ComparisonController::class, 'previousCompanyComparison']);
    // 追加設問の回答分布
    Route::get('additional-question/pie/{survey_term_id}', [ChartController::class, 'additionalQuestionRatio']);
    // 設問項目の平均ヒートマップ
    Route::get('question_category/treemap/{survey_term_id}', [ChartController::class, 'questionCategoryTreemap']);
    // 追加設問タイプ割合の推移
    Route::get('additional-question/ratio/transition/{survey_term_id}', [MonthlyChartController::class, 'additionalQuestionTransition']);
});

//マンスリーアンケート設定画面の日付取得
Route::get('monthly_date/{survey_category_id}', [MonthlyDateController::class, 'index']);
//マンスリーアンケート設定画面のpost, put処理
Route::apiResource('create_monthly_survey', CreateMonthlySurveyController::class);
