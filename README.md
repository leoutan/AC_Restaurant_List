# AC_HW 餐廳清單
使用 Express 框架，搭配 AC 提供的靜態檔案，先建立 8 個餐廳的清單，可用關鍵字搜尋餐廳名稱或類別。
## 環境建置
1. [Node.js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/zh-tw/)
3. [Handlebars](https://handlebarsjs.com/)
## 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦，在終端機輸入
```
git clone https://github.com/leoutan/AC_Restaurant_List.git
```
2. 在終端機移動到存放此專案的資料夾
```
cd Restaurant_List
```
3. 依據 package.json 套件清單，安裝 npm 套件，在終端機輸入
```
npm install
```
4. 啟動伺服器，在終端機輸入以下，會執行 npm script 定義的指令
```
npm run dev
```
終端顯示 `server on http://localhost:3000` 即啟動完成，請至 http://localhost:3000/ 開始使用程式
## 功能
- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
    - 餐廳照片
    - 餐廳名稱
    - 餐廳分類
    - 餐廳評分
- 使用者可以再點進去看餐廳的詳細資訊：
    - 類別
    - 地址
    - 電話
    - 描述
    - 圖片
- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
- 使用者可以透過搜尋餐廳類別來找到特定的餐廳
