const DB = require("nedb-promises");

const testDB = DB.create({ filename: "test.db", autoload: true });

(async () => {
    try {
        // 插入資料
        await testDB.insert({ name: "Test User", age: 25 });

        // 查詢資料
        const docs = await testDB.find({});
        console.log("Documents:", docs);
    } catch (error) {
        console.error("Error:", error);
    }
})();
